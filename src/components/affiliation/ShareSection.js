const ShareSection = () => {
    return (
        <div className="px-4 py-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Partagez à tout moment et n'importe où
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed text-justify mb-8">
                Avec notre programme d'affiliation, partagez facilement vos codes de parrainage sur tous vos réseaux 
                sociaux préférés. Que ce soit sur WhatsApp, Instagram, Facebook ou par message direct, vous pouvez 
                toucher votre audience où qu'elle soit.
            </p>

            <div className="flex gap-4">
                <div className="w-1/2">
                    <img 
                        src="/images/affiliation-share-1.jpg" 
                        alt="Partage sur mobile"
                        className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    />
                </div>
                
                <div className="w-1/2 flex flex-col gap-4">
                    <img 
                        src="/images/affiliation-share-2.jpg" 
                        alt="Partage sur réseaux sociaux"
                        className="w-full h-[190px] object-cover rounded-lg shadow-md"
                    />
                    <img 
                        src="/images/affiliation-share-3.jpg" 
                        alt="Suivi des partages"
                        className="w-full h-[190px] object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShareSection; 