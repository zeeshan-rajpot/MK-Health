import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Overview = () => {

 // Define an array of medication names
 const medications = [
    'Acyclovir (Zovirax)',
    'Acyclovir ',
    '  (Zovirax)',
    '  Albuterol',
    '  Amoxicillin',
    '  Benazil',
    '  Cialis',
    '  Chloroquine',
    '  Cofloxacin',
    '  Clindamycin',
    '  Clobetasol',
    '  Cyclobenzine',
    '  Desonide',
    '  Diclofenac',
    '  Diflucan',
    '  Doxycycline',
    '  Enalil',
    '  Estradiol',
    '  Ferrous Sulfate',
    '  Finasteride',
    '  Hydrochlorothiazide',
    '  Ibuprofen',
    '  Ivermectin',
    '  Ketorolac',
    '  Lactulose',
    '  Latisse',
    '  Liothyronine (Cytomel)',
    '  Lipitor',
    '  Lisinopril',
    '  Medrol Dosepak',
    '  Metformin (Glucophage)',
    '  Metoprolol',
    '  Metronidazole',
    '  Mometasone',
    '  Tirzepatide (Mounjaro)',
    '  Mupirocin (Bactroban)',
    '  Naproxen',
    '  Nitrofurantoin',
    '  NuvaRing',
    '  Orlistat (Xenical)',
    '  Paxlovid',
    '  Penicillin',
    '  Permethrin',
    '  Pilocarpine (Vuity)',
    '  Prednisone',
    '  Premarin',
    '  Pioglitazone (Actos)',
    '  Progesterone (Prometrium)',
    '  Propranolol (Inderal)',
    '  Saxenda',
    '  Semaglutide (Ozempic, Rybelsus)',
    '  Sertraline (Zoloft)',
    '  Spironolactone',
    '  Strattera',
    '  Tamsulosin (Flomax)',
    '  Terbinafine (Lamisil)',
    '  Topiramate (Topamax)',
    '  Tretinoin',
    '  Triamcinolone (Kenalog)',
    '  Valacyclovir (Valtrex)',
    '  Viagra',
    '  Z-Pak',
  ];
  const Other = [
    'Aimovig',
    'Allopurinol (Zyloprim)',
    'Amitiza',
    'Amlodipine (Norvasc)',
    'Atorvastatin',
    'Augmentin',
    'Amitiza',
    'Azathioprine',
    'Bactrim',
    'Benzoyl Peroxide',
    'Benzonatate',
    'Cefpodoxime',
    'Cephalexin (Keflex)',
    'Cetirizine',
    'Chlorhexidine',
    'Chloroquine',
    'Cimetidine',
    'Diltiazem (Cardizem)',
    'Emgality',
    'Enbrel',
    'Fluticasone',
    'Furosemide (Lasix)',
    'Glipizide (Glucotrol)',
    'Hydralazine',
    'Hydrocortisone',
    'Indomethacin',
    'Januvia',
    'Levothyroxine',
    'Linzess',
    'Losartan (Cozaar)',
    'Meclizine (Antivert)',
    'Metanx',
    'Methimazole (Tapazole)',
    'Methylprednisolone',
    'Metoclopramide (Reglan)',
    'Metoclopramide (Reglan)',
    'Nifedipine (Procardia)',
    'Omeprazole',
    'Ondansetron (Zofran)',
    'Otezla',
    'Pantoprazole',
    'Prochlorperazine',
    'Quinapril',
    'Ramelteon (Rozerem)',
    'Scopolamine',
    'Sucralfate',
    'Sulfasalazine',
    'Symbicort',
    'Tamiflu',
    'Terbinafine',
    'Valsartan (Diovan)',
    'Vascepa',
    'Victoza',
    'Zinc Sulfate',
  ];



  return (
    <>
      <div>
      <Container>
        <Row  className='mt-5'>
          <Col>
            <p className='text-black fs-3'>Choose Medication Refills</p>
            <p className='text-muted'>
              Medications that cannot be refilled via an online prescription
              through a service like MK Health included controlled medications
              like narcotics or anxiety medications, gabapentin, or any other
              medication that a medical provider determines would not be
              appropriate to prescribe through an online evaluation.
            </p>
            <p className='mt-3 text-black'>Common Medication Refills</p>
          </Col>
        </Row>
        <Row className='m-auto'>
          {medications.map((medication, index) => (
            <Col key={index} xl={4} xs={6} className='medicationp'>
              <Link to={`/MedicationFormPage/${medication}`}>
                <p className='medicationp'>{medication}</p>
              </Link>
            </Col>
          ))}
        </Row>

        <Row className='m-auto mt-4'>
          <p>Other Medication Refills</p>
          {Other.map((Other, index) => (
            <Col key={index} xl={4} xs={6} className='medicationp'>
              <Link to={`/MedicationFormPage/${Other}`}>
                <p className='medicationp'>{Other}</p>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    
    </>
  )
}

export default Overview