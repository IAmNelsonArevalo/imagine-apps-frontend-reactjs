import React from "react";
/** Views */
import useViews from "views";



const DashboardLayout: React.FC<{ children: any; }> = ({ children }): JSX.Element => {
    /** Views */
    const { useComponents } = useViews();
    const { CartButton, Header } = useComponents();

    return (
        <React.Fragment>
            <div className="flex h-screen bg-gray-100 flex-col">
                <Header />
                {children}
            </div>
            {
                window.location.pathname !== "/checkout" && (
                    <CartButton />
                )
            }
        </React.Fragment>
    );
}


export default DashboardLayout;