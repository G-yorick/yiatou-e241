import { FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const PersonnalInfo = () => {
  return (
    <>
      <div>
        <p className="text-center font-medium text-gray-600">
          Ces information permettent a Yiatou de traiter tes commandes et
          restent privees.
        </p>
      </div>
      <form className="mt-[70px] mb-2 flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <input type="radio" name="sexe" id="m" />
            <label htmlFor="m">Monsieur</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" name="sexe" id="f" />
            <label htmlFor="f">Madame</label>
          </div>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Prenoms"
          className="border px-2 py-2 rounded w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="N de telephone appel"
          className="border px-2 py-2 rounded w-full"
        />
        <textarea
          name="adresse"
          placeholder="Adresse de livraison"
          className="border px-2 py-2 rounded w-full min-h-[150px] resize-none"
        ></textarea>
        <button className="w-full py-2 px-3 rounded bg-blue-800 text-white font-medium">
          Enregistrer
        </button>
      </form>
      <Link
        to="#"
        className="flex justify-center items-center gap-2 py-4 text-gray-400"
      >
        <FaUserLock />
        <span className="underline">
          Voir notre politique de confidentialité
        </span>
      </Link>
    </>
  );
};

export default PersonnalInfo;
