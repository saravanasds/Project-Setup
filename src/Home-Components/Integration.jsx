import React from 'react';

const IntegrationsSection = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-primary text-center mb-8">
                    Integrated With Diverse Third-Party Solutions
                </h2>

                <div className="overflow-hidden">
                    <div className="flex space-x-12 animate-marquee">
                        {/* Integration 1 */}
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo1.png" alt="Integration 1" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 1</p>
                        </div>
                        
                        {/* Integration 2 */}
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo2.png" alt="Integration 2" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 2</p>
                        </div>
                        
                        {/* Integration 3 */}
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo3.png" alt="Integration 3" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 3</p>
                        </div>
                        
                        {/* Integration 4 */}
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo4.png" alt="Integration 4" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 4</p>
                        </div>
                        
                        {/* Integration 5 */}
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo5.png" alt="Integration 5" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 5</p>
                        </div>
                        
                        {/* Integration 6 */}
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo6.png" alt="Integration 6" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 6</p>
                        </div>

                        {/* Repeat the same integrations for infinite loop */}
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo1.png" alt="Integration 1" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 1</p>
                        </div>
                        
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo2.png" alt="Integration 2" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 2</p>
                        </div>
                        
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo3.png" alt="Integration 3" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 3</p>
                        </div>
                        
                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo4.png" alt="Integration 4" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 4</p>
                        </div>

                        <div className="integration-card p-4">
                            <img src="path_to_integration_logo5.png" alt="Integration 5" className="w-32 h-32 object-contain" />
                            <p className="mt-2 text-center">Integration 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
