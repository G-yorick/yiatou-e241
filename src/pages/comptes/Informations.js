import { useState } from "react";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

export default function Informations() {
  const [userData, setUserData] = useState({
    personal: {
      civility: "Monsieur",
      firstName: "Dave",
      lastName: "Anguilet",
      email: "abcdef@gmail.com",
      phone: "066038083",
      status: "Employé",
      birthDate: "18/02/1998"
    },
    address: {
      city: "Libreville",
      address1: "Beausejour,En face de chez...",
      occasionalAddress: "Beausejour,En face de chez..."
    },
    payment: {
      airtelMoney: "074567765",
      fullName: "Anguilet prenom"
    },
    password: {
      current: "*****************"
    }
  });

  const [editSections, setEditSections] = useState({
    personal: false,
    address: false,
    payment: false,
    password: false
  });

  const handleEdit = (section) => {
    setEditSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = async (section, newData) => {
    try {
      setUserData(prev => ({
        ...prev,
        [section]: newData
      }));
      
      handleEdit(section);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Mes informations"/>}>
      <div className="px-3 py-4 flex flex-col gap-8 bg-white mt-8">
        <div className="border-b-2 border-gray-300 pb-5">
          <H2>Informations personnelles</H2>
          <Section onEdit={() => handleEdit('personal')}>
            {!editSections.personal ? (
              <>
                <Item>Monsieur</Item>
                <Item title="Prenom">{userData.personal.firstName}</Item>
                <Item title="Noms">{userData.personal.lastName}</Item>
                <Item title="Adresse email">{userData.personal.email}</Item>
                <Item title="Numero de telephone">{userData.personal.phone}</Item>
                <Item title="Statut">{userData.personal.status}</Item>
                <Item title="Date de naissance">{userData.personal.birthDate}</Item>
              </>
            ) : (
              <EditForm
                initialData={userData.personal}
                fields={[
                  { name: "civility", label: "Civilité", type: "select", options: ["Monsieur", "Madame"] },
                  { name: "firstName", label: "Prenom", type: "text" },
                  { name: "lastName", label: "Noms", type: "text" },
                  { name: "email", label: "Adresse email", type: "email" },
                  { name: "phone", label: "Numero de telephone", type: "tel" },
                  { name: "status", label: "Statut", type: "text" },
                  { name: "birthDate", label: "Date de naissance", type: "date" }
                ]}
                onSave={(data) => handleSave('personal', data)}
                onCancel={() => handleEdit('personal')}
              />
            )}
          </Section>
        </div>
        <div className="border-b-2 border-gray-300 pb-5">
          <H2>Adresses de livraison</H2>
          <Section onEdit={() => handleEdit('address')}>
            {!editSections.address ? (
              <>
                <Item title="Villes">{userData.address.city}</Item>
                <Item title="Adresse de livraison 1">{userData.address.address1}</Item>
                <Item title="Adresse de livraison occasionnelle">{userData.address.occasionalAddress}</Item>
              </>
            ) : (
              <EditForm
                initialData={userData.address}
                fields={[
                  { name: "city", label: "Villes", type: "text" },
                  { name: "address1", label: "Adresse de livraison 1", type: "text" },
                  { name: "occasionalAddress", label: "Adresse de livraison occasionnelle", type: "text" }
                ]}
                onSave={(data) => handleSave('address', data)}
                onCancel={() => handleEdit('address')}
              />
            )}
          </Section>
        </div>
        <div className="border-b-2 border-gray-300 pb-5">
          <H2>Coodonnées de paiement</H2>
          <Section onEdit={() => handleEdit('payment')}>
            {!editSections.payment ? (
              <>
                <Item title="N Airtel Money">{userData.payment.airtelMoney}</Item>
                <Item title="Nom complet relié au compte">{userData.payment.fullName}</Item>
              </>
            ) : (
              <EditForm
                initialData={userData.payment}
                fields={[
                  { name: "airtelMoney", label: "N Airtel Money", type: "tel" },
                  { name: "fullName", label: "Nom complet relié au compte", type: "text" }
                ]}
                onSave={(data) => handleSave('payment', data)}
                onCancel={() => handleEdit('payment')}
              />
            )}
          </Section>
        </div>
        <div className="pb-5">
          <H2>Mon mot de passe</H2>
          <Section onEdit={() => handleEdit('password')}>
            {!editSections.password ? (
              <>
                <Item title="Mot de passe actuelle">{userData.password.current}</Item>
              </>
            ) : (
              <EditForm
                initialData={userData.password}
                fields={[
                  { name: "current", label: "Mot de passe actuelle", type: "password" }
                ]}
                onSave={(data) => handleSave('password', data)}
                onCancel={() => handleEdit('password')}
              />
            )}
          </Section>
        </div>
      </div>
    </PageLayout>
  );
}

const EditForm = ({ fields, initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">{field.label}</label>
          {field.type === 'select' ? (
            <select
              className="p-2 border rounded-md"
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            >
              {field.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="p-2 border rounded-md"
            />
          )}
        </div>
      ))}
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
};

const Section = ({ children, onEdit }) => {
  return (
    <div className="grid grid-cols-[1fr_30px] py-3">
      <div className="flex flex-col gap-3">
        {children}
      </div>
      <div className="flex justify-center items-start flex-col">
        <button 
          onClick={onEdit}
          className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label="Modifier les informations"
        >
          <i className="fi fi-rr-edit"></i>
        </button>
      </div>
    </div>
  );
};

const H2 = ({children})=>{
    return (
        <h2 className="font-medium text-lg">{children}</h2>
    );
}
const Item = ({title = "Civilité",children}) => {
    return (
        <div>
            <p className="font-medium text-gray-600 text-[13px]">{title}</p>
            <p className="font-medium">{children}</p>
        </div>
    );
}