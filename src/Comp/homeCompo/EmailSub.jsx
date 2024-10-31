import stylee from "./css/Email.module.css";

function EmailSub() {
    return (
        <>      
            <div className="w-full h-auto bg-customTeal flex flex-col md:flex-row items-center p-4 md:h-44">
                <div className="flex flex-col items-center text-center md:items-start md:w-2/3  md:text-left mb-4 md:mb-0">
                    <h1 className="font-bold text-center text-xl  md:text-2xl">
                        Have a 10% discount, on us!
                    </h1>
                    <p className="text-sm md:text-base mt-2">
                        Sign up to our newsletter and receive exclusive discounts, trip inspiration, and attraction updates straight to your inbox.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 w-full md:w-1/3">
                    <input 
                        type="text" 
                        id="lname" 
                        name="lname" 
                        className="px-2 py-1 border border-gray-400 rounded-md w-full md:w-auto" 
                        placeholder="Enter your email" 
                    />
                    <button className={`${stylee.btn} w-full md:w-auto`}>Subscribe Now</button>
                </div>
            </div>
        </>
    );
}

export default EmailSub;
