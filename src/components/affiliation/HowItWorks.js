const HowItWorks = () => {
    return (
        <div className="px-4 py-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Comment ça marche
            </h2>

            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <span className="flex-shrink-0 text-gray-600  text-xl font-bold">{index + 1}.</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const steps = [
    {
        title: "Inscrivez-vous au programme",
        description: "Créez votre compte d'affilié et obtenez votre code de parrainage unique"
    },
    {
        title: "Partagez votre code",
        description: "Diffusez votre code sur vos réseaux sociaux ou partagez-le directement avec vos proches"
    },
    {
        title: "Suivez vos parrainages",
        description: "Consultez en temps réel les inscriptions et achats effectués avec votre code"
    },
    {
        title: "Recevez vos commissions",
        description: "Gagnez automatiquement votre commission pour chaque achat effectué par vos filleuls"
    }
];

export default HowItWorks; 