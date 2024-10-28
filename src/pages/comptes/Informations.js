import { useState } from "react";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

export default function Informations() {
  // État initial des données utilisateur
  const [userData, setUserData] = useState({
    civilite: "Monsieur",
    prenom: "Dave",
    nom: "Anguilet",
    email: "abcdef@gmail.com",
    telephone: "066038083",
    statut: "Employé",
    dateNaissance: "18/02/1998",
    ville: "Libreville",
    adresse1: "Beausejour,En face de chez...",
    adresseOccasionnelle: "Beausejour,En face de chez...",
    airtelMoney: "074567765",
    nomCompte: "Anguilet prenom",
    password: "*****************"
  });

  // État pour gérer quelle section est en mode édition
  const [editingSections, setEditingSections] = useState({
    personal: false,
    address: false,
    payment: false,
    password: false
  });

  const handleEdit = (section) => {
    setEditingSections(prev => ({
      ...prev,
      [section]: true
    }));
  };

  const handleSave = (section) => {
    // Ici vous ajouteriez l'appel API pour sauvegarder les modifications
    setEditingSections(prev => ({
      ...prev,
      [section]: false
    }));
  };

  const handleChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Mes informations"/>}>
      <div className="flex flex-col gap-3 bg-gray-50 min-h-screen pb-20">
        <div className="px-5 py-3 bg-white rounded-lg shadow-sm mt-10">
          <Section 
            isEditing={editingSections.personal}
            onEdit={() => handleEdit('personal')}
            onSave={() => handleSave('personal')}
            title="Informations personnelles"
          >
            <EditableItem
              title="Civilité"
              value={userData.civilite}
              isEditing={editingSections.personal}
              onChange={(value) => handleChange('civilite', value)}
              options={["Monsieur", "Madame", "Autre"]}
            />
            <EditableItem
              title="Prenom"
              value={userData.prenom}
              isEditing={editingSections.personal}
              onChange={(value) => handleChange('prenom', value)}
            />
            <EditableItem
              title="Noms"
              value={userData.nom}
              isEditing={editingSections.personal}
              onChange={(value) => handleChange('nom', value)}
            />
            <EditableItem
              title="Adresse email"
              value={userData.email}
              isEditing={editingSections.personal}
              onChange={(value) => handleChange('email', value)}
            />
            <EditableItem
              title="Numero de telephone"
              value={userData.telephone}
              isEditing={editingSections.personal}
              onChange={(value) => handleChange('telephone', value)}
            />
            <EditableItem
              title="Statut"
              value={userData.statut}
              isEditing={editingSections.personal}
              onChange={(value) => handleChange('statut', value)}
            />
            <EditableItem
              title="Date de naissance"
              value={userData.dateNaissance}
              isEditing={editingSections.personal}
              onChange={(value) => handleChange('dateNaissance', value)}
            />
          </Section>
        </div>

        <div className="px-4 py-3 bg-white rounded-lg shadow-sm">
          <Section 
            isEditing={editingSections.address}
            onEdit={() => handleEdit('address')}
            onSave={() => handleSave('address')}
            title="Adresses de livraison"
          >
            <EditableItem
              title="Villes"
              value={userData.ville}
              isEditing={editingSections.address}
              onChange={(value) => handleChange('ville', value)}
            />
            <EditableItem
              title="Adresse de livraison 1"
              value={userData.adresse1}
              isEditing={editingSections.address}
              onChange={(value) => handleChange('adresse1', value)}
            />
            <EditableItem
              title="Adresse de livraison occasionnelle"
              value={userData.adresseOccasionnelle}
              isEditing={editingSections.address}
              onChange={(value) => handleChange('adresseOccasionnelle', value)}
            />
          </Section>
        </div>

        <div className="px-4 py-3 bg-white rounded-lg shadow-sm">
          <Section 
            isEditing={editingSections.payment}
            onEdit={() => handleEdit('payment')}
            onSave={() => handleSave('payment')}
            title="Coordonnées de paiement"
          >
            <EditableItem
              title="N Airtel Money"
              value={userData.airtelMoney}
              isEditing={editingSections.payment}
              onChange={(value) => handleChange('airtelMoney', value)}
            />
            <EditableItem
              title="Nom complet relié au compte"
              value={userData.nomCompte}
              isEditing={editingSections.payment}
              onChange={(value) => handleChange('nomCompte', value)}
            />
          </Section>
        </div>

        <div className="px-4 py-3 bg-white rounded-lg shadow-sm">
          <Section 
            isEditing={editingSections.password}
            onEdit={() => handleEdit('password')}
            onSave={() => handleSave('password')}
            title="Mot de passe"
          >
            <EditableItem
              title="Mot de passe actuel"
              value={userData.password}
              isEditing={editingSections.password}
              onChange={(value) => handleChange('password', value)}
              type="password"
            />
          </Section>
        </div>
      </div>
    </PageLayout>
  );
}

const H2 = ({children}) => {
  return (
    <h2 className="font-semibold text-gray-800 text-base mb-3">{children}</h2>
  );
}

const Item = ({title = "Civilité", children}) => {
  return (
    <div className="py-2.5 border-b border-gray-100 last:border-b-0">
      <p className="text-gray-500 text-sm mb-1">{title}</p>
      <p className="text-gray-900 font-medium">{children}</p>
    </div>
  );
}

const Section = ({children, isEditing, onEdit, onSave, title}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-gray-800 text-base">{title}</h2>
        {isEditing ? (
          <button 
            onClick={onSave}
            className="flex items-center gap-1 text-sm text-blue-600 font-medium"
            aria-label="Sauvegarder les modifications"
          >
            <i className="fi fi-rr-check text-lg"></i>
            <span>Sauvegarder</span>
          </button>
        ) : (
          <button 
            onClick={onEdit}
            className="flex items-center gap-1 text-sm text-gray-600 font-medium"
            aria-label="Modifier les informations"
          >
            <i className="fi fi-rr-edit text-lg"></i>
            <span>Modifier</span>
          </button>
        )}
      </div>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}

const EditableItem = ({ title, value, isEditing, onChange, options = null, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isEditing) {
    if (type === "password") {
      return (
        <div className="py-2.5 border-b border-gray-100 last:border-b-0">
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-900 font-medium flex-1">
              {showPassword ? value : "•".repeat(value.length)}
            </p>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 hover:text-gray-700 p-1"
              aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              <i className={`fi ${showPassword ? "fi-rr-eye-crossed" : "fi-rr-eye"} text-lg`}></i>
            </button>
          </div>
        </div>
      );
    }
    return <Item title={title}>{value}</Item>;
  }

  if (options) {
    return (
      <div className="py-2.5 border-b border-gray-100 last:border-b-0">
        <p className="text-gray-500 text-sm mb-1">{title}</p>
        <select 
          className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "password") {
    return (
      <div className="py-2.5 border-b border-gray-100 last:border-b-0">
        <p className="text-gray-500 text-sm mb-1">{title}</p>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2.5 pr-10 border border-gray-200 rounded-lg bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            <i className={`fi ${showPassword ? "fi-rr-eye-crossed" : "fi-rr-eye"} text-lg`}></i>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-2.5 border-b border-gray-100 last:border-b-0">
      <p className="text-gray-500 text-sm mb-1">{title}</p>
      <input
        type="text"
        className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
