import React from "react";
/** Views */
import useViews from "views";



const DashboardLayout: React.FC<{ children: any; }> = ({ children }): JSX.Element => {
    /** Views */
    const { useComponents } = useViews();
    const { Sidebar } = useComponents();

    return (
        <React.Fragment>
            <div className="flex h-screen bg-gray-100">
                <Sidebar />
                <main className="flex-1">
                    <div className="bg-white h-[76px] flex items-center justify-between rounded min-tablet:shadow shadow-none w-[95%] px-[20px] mx-auto mt-[20px]">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="w-[95%] mx-auto mt-[20px]">
                        {children}
                    </div>
                </main>
            </div>

        </React.Fragment>
    );
}


export default DashboardLayout;