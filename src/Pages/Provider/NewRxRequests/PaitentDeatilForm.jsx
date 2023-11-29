import { useState, useRef, useEffect } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import { baseurl } from "../../../const";
const PaitentDeatilForm = () => {
  const { id } = useParams();

  const datePickerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    dob: "",
    address: "",
    // Add other properties as needed
  });

  const [detailsData, setDetailsData] = useState(null);
  const [socket, setSocket] = useState(null);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [fetchedMessages, setFetchedMessages] = useState([]);
  const openDatePicker = () => {
    datePickerRef.current.click();
  };
  const token = localStorage.getItem("token");
  const PatientDetails = [
    { placeholder: "Sarah Johnson", label: "Name", type: "text" },
    { placeholder: "42 years old (Female)", label: "Age" },
    { placeholder: "11/30/80", label: "DOB", type: "date" },
    {
      placeholder: "1224 Stillwater Dr,Roc Springs ,WY,52467",
      label: "Address",
    },
  ];

  const [values, setValues] = useState(Array(PatientDetails.length).fill(""));

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    // Set the initial active button when the component mounts
    setActiveButton(0);
  }, []);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const handleImageClick = () => {
    setIsSectionVisible(!isSectionVisible);
    handleCreateConversation();
  };

  const handleImageClick2 = () => {
    setIsSectionVisible(true);
  };

  useEffect(() => {
    const newSocket = io(`${baseurl}`); // Replace with your server URL
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        setLoading(true);

        // Fetch patient data
        const response = await axios.get(
          `${baseurl}/api/doctor/getprescription/${id}`,
          { headers }
        );
        const fetchedPatientData = response.data.data;

        setLoading(false);

        setPatientData(fetchedPatientData);
        // Set detailsData here to ensure it's not null or undefined
        setDetailsData(response.data);

        // Trigger the conversation creation when both detailsData and patientData are available
      } catch (error) {
        console.error("Error fetching patient data:", error);
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [id]);

  useEffect(() => {
    // Trigger the conversation creation when the component mounts
    handleCreateConversation();

    // Fetch additional details using the provided API
    getAdditionalDetails();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const getAdditionalDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Fetch additional details
      const response = await axios.get(`${baseurl}/api/auth/getdetails`, {
        headers,
      });
      const detailsData = response.data;

      setDetailsData(detailsData);
      // Handle the response or update state with the detailsData
    } catch (error) {
      console.error("Error fetching additional details:", error);
      // Handle errors here
    }
  };

  const userid = detailsData?.data?._id;
  // console.log(userid)

  const handleCreateConversation = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      if (detailsData && detailsData.data) {
        const payload = {
          participants: [userid, patientData.patientId],
        };

        const response = await axios.post(
          `${baseurl}/api/messenges/createconversation`,
          payload,
          { headers }
        );

        console.log("Conversation created successfully:", response.data);

        const conversationId = response.data.conversation._id;
        setCurrentConversationId(conversationId);
        socket.emit("joinConversation", { conversationId, userid });
        console.log(conversationId);
        // Handle the response or perform additional actions here
      } else {
        console.error("Details data or data property is null or undefined.");
      }
    } catch (error) {
      console.error("Error creating conversation:", error);
      // Handle errors here
    }
  };
  const handleSendMessage = () => {
    if (socket && currentConversationId && message) {
      const newMessage = { senderId: userid, text: message, type: "sent" };

      // Update the local state with the new message
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Emit the new message through the socket
      socket.emit("newMessage", {
        conversationId: currentConversationId,
        senderId: userid,
        text: message,
      });

      // Clear the message input after sending
      setMessage("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://hkhealth.azurewebsites.net/api/messenges/${currentConversationId}?page=1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Message API Response:", response.data);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    // Fetch messages initially and then at regular intervals
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted or when currentConversationId or token changes
    return () => clearInterval(intervalId);
  }, [currentConversationId, token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <h3
              className="m-auto  mt-5 text-center"
              style={{ width: "75%", color: "#FAB915" }}
            >
              Patient Chart
            </h3>

            <div
              className=" m-auto mt-5  shadow py-5 mobw100 rounded-0 "
              style={{ width: "80%" }}
            >
              <div className=" m-auto" style={{ width: "80%" }}>
                <div className=" justify-content-start  align-items-center">
                  <img
                    src={patientData.profilePic}
                    style={{ width: "400px" }}
                  />
                  <p className="my-0 fs-2 ">
                    {" "}
                    {patientData.personalInformation.name}{" "}
                  </p>
                </div>
                <div className="mt-5  border-bottom">
                  <p className="my-0">
                    <span className="fw-bold">Date of Birth:</span>
                    {patientData.personalInformation.dob}
                  </p>
                  <p className="my-0 mt-2 mb-3">
                    <span className="fw-bold">Address Line:</span>
                    {patientData.personalInformation.address.streetAddress}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="my-0 fw-bold ">
                    Patient Provided Data as of (10/25/23)
                  </p>
                  <p className="my-0">
                    <span className="fw-bold">Past Medical Problems: </span>
                    {patientData.personalInformation.pastMedicalHistory}
                  </p>
                  <p className="my-0 ">
                    <span className="fw-bold">Current Medications:</span>
                    {patientData.personalInformation.currentMedication}
                  </p>
                  <p className="my-0  mb-3">
                    <span className="fw-bold">Allergies:</span>
                    {patientData.personalInformation.knownAllergies}
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div
              className=" m-auto mt-5 d-flex justify-content-start align-items-center shadow p-4 mobw100 rounded-5 "
              style={{ width: "80%" }}
            >
              <img
                src="/galaAdd0.svg"
                className="me-4"
                role="button"
                onClick={handleImageClick}
              />
              <p className="my-0" style={{ color: "#FAB915" }}>
                Message
              </p>
            </div>

            <br />
            <br />
            {isSectionVisible && (
              <div
                className=" m-auto  shadow p-4 mobw100 rounded-4 "
                style={{ width: "80%" }}
              >
                <div className="d-flex justify-content-start align-items-center border-bottom pb-3">
                  <img
                    src="/gala_add.svg"
                    role="button"
                    className="me-4"
                    onClick={handleImageClick2}
                  />
                  <p className="my-0" style={{ color: "#FAB915" }}>
                    Message
                  </p>
                </div>
                {isSectionVisible && (
                  <div style={{ height: "600px" }}>
                    <div style={{ height: "500px", overflowY: "auto" }}>
                    {[...messages].reverse().map((msg, index) => (
  <div
    key={index}
    className={`d-flex justify-content-${
      msg.sender?._id === userid ? "end" : "start"
    } align-items-center`}
  >
    <div
      className={`p-2 px-4 text-black mt-4 rounded-5`}
      style={{
        backgroundColor:
        msg.sender?._id === userid
            ? "#FFEEC5"
            : "#E5E5E5",
      }}
    >
      <p className="my-0">{msg.messageText}</p>
    </div>
  </div>
))}

                    </div>
                    <div className="shadow p-3 w-100 d-flex justify-content-between  align-items-center w-100 rounded-5">
                      <div className="d-flex w-75">
                        <img src="/filesadd.svg" className="me-3 " />
                        <input
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          type="text"
                          placeholder="Write message..."
                          className="w-100"
                        />
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          style={{ backgroundColor: "#FAB915" }}
                          className="p-2 w-100 border-0 rounded-5 text-white"
                          onClick={handleSendMessage}
                        >
                          <img src="/fa_send-o.svg" className="me-3" />
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div
              className="shadow my-4 m-auto p-4 mobw100"
              style={{ width: "80%" }}
            >
              <Row>
                <Col md={6}>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-3 mb-2 ${
                      activeButton === 0 ? "active-button" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 0 ? "#EB5757" : "#B6C5D1",
                    }}
                    onClick={() => handleButtonClick(0)}
                  >
                    <img
                      src="/Component 613 – 2.svg"
                      alt="icon"
                      className="me-3"
                    />
                    Rx Request Pending
                  </button>
                </Col>
                <Col md={6}>
                  <Link to="/RequestedRxForm">
                    <button
                      className={`text-white w-100 p-3 border-0 rounded-3 mb-2 ${
                        activeButton === 1 ? "active-button" : ""
                      }`}
                      style={{
                        backgroundColor:
                          activeButton === 1 ? "#EB5757" : "#B6C5D1",
                      }}
                      onClick={() => handleButtonClick(1)}
                    >
                      <img
                        src="/Component 614 – 2.svg"
                        alt="icon"
                        className="me-3"
                      />
                      Write Prescription
                    </button>
                  </Link>
                </Col>
                <Col md={6}>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-3 mb-2 ${
                      activeButton === 2 ? "active-button" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 2 ? "#EB5757" : "#B6C5D1",
                    }}
                    onClick={() => handleButtonClick(2)}
                  >
                    <img
                      src="/Component 615 – 2.svg"
                      alt="icon"
                      className="me-3"
                    />{" "}
                    Order Lab Tests
                  </button>
                </Col>
                <Col md={6}>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-3 mb-2 ${
                      activeButton === 3 ? "active-button" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 3 ? "#EB5757" : "#B6C5D1",
                    }}
                    onClick={() => handleButtonClick(3)}
                  >
                    <img
                      src="/Component 617 – 2.svg"
                      alt="icon"
                      className="me-3"
                    />{" "}
                    Create Invoice
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaitentDeatilForm;
