export default function Header(){
    return(
        <>
            <header className="w-full  absolute z-20 ">
                <div className="flex justify-between mx-auto">
                    <p className="w-[20%]"><img src="logo.png" alt="ぼうさいポッケ" /></p>
                    <p className="w-[10%] mx-auto"><input type="button" value="ログイン" className="w-full pt-[6px] pb-[6px] mx-auto rounded bg-[#FFB438] text-base font-bold text-[#fff]"/></p>
                </div>
            </header>
        </>
    );
}