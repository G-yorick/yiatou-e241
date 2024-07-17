const DestinationCommande = () => {
    return (
        <div className="py-5 px-3 mt-1 bg-white">
            <p className="text-lg font-medium mb-3">Comment veux-tu recevoir ta commande ?</p>
            <div className="flex gap-2 items-center">
                <input type="radio" name="destination" id="livraison"/>
                <label htmlFor="livraison">Je veux me faire livrer</label>
            </div>
            <div className="pl-6">
            <div className="border px-4 py-1 my-2 inline-block rounded">
                <select className="outline-none">
                    <option>Choisir la zone de livraison</option>
                    <option value="libreville">2,000 FCFA Libreville</option>
                    <option value="akanda">2,500 FCFA Akanda</option>
                </select>
            </div>
            <p className="text-[13px] font-medium">Tu seras livre dans moins de 01:59:45</p>
            </div>
            <div className="flex gap-2 items-center my-3">
                <input type="radio" name="destination" id="recuperer"/>
                <label htmlFor="recuperer">Passer recuperer au Beausejour</label>
            </div>
        </div>
    );
}

export default DestinationCommande;
