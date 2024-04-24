export default function Background() {
    return (
        <>
            <Flowers />
            <Bubbles />
        </>
    );
}

function Flowers() {
    return (
        <div className="relative w-full z-0 h-lvh">
            <img
                src="./purple-spongebob-flower.png"
                alt="purple spongebob flower"
                className="absolute top-[-100px] sm:top-[-110px] left-[-110px] sm:left-[-113px] max-w-[385px] sm:max-w-[455px] lg:max-w-[485px]"
            />

            <img
                src="./pink-spongebob-flower.png"
                alt="pink spongebob flower"
                className="absolute top-[-7px] sm:top-[0px] md:top-[25px] left-[205px] sm:left-[265px] lg:left-[290px] max-w-[175px] sm:max-w-[245px] lg:max-w-[275px]"
            />
            <img
                src="./white-spongebob-flower.png"
                alt="white spongebob flower"
                className="absolute top-[250px] sm:top-[320px] left-[0px] sm:left-[-5px] max-w-[85px] sm:max-w-[135px] lg:max-w-[165px]"
            />
            <img
                src="./yellow-spongebob-flower.png"
                alt="yellow spongebob flower"
                className="absolute top-[200px] md:top-[15px] right-[-7px] sm:right-[0px] max-w-[245px] sm:max-w-[315px] lg:max-w-[375px]"
            />
            <img
                src="./coral-spongebob-flower.png"
                alt="coral spongebob flower"
                className="absolute bottom-[0px] sm:bottom-[40px] left-[-100px] sm:left-[-45px] lg:left-[10px] max-w-[265px] sm:max-w-[335px] lg:max-w-[365px]"
            />
            <img
                src="./blue-spongebob-flower.png"
                alt="blue spongebob flower"
                className="absolute bottom-[0px] sm:bottom-[110px] right-[0px] sm:right-[35px] md:right-[90px] max-w-[135px] sm:max-w-[205px] lg:max-w-[265px]"
            />
        </div>
    );
}

function Bubbles() {
    return (
        <div className="absolute inset-0">
            <div className="relative w-full z-10 h-lvh">
                {/* <div className="absolute top-[-199px] sm:top-[-223px] md:top-[-210px] left-[229px] sm:left-[433px] md:left-[484px] lg:left-[530px]">
                    <LargeBubble />
                </div>
                <div className="absolute top-[-261px] sm:top-[-230px] right-[6px] sm:right-[25px] lg:right-[100px]">
                    <LargeBubble />
                </div> */}
                {/* <div className="absolute top-[-190px] lg:top-[-180px] left-[170px] sm:left-[220px] lg:left-[240px]">
                    <MediumBubble />
                </div>
                <div className="absolute top-[-98px] sm:top-[-80px] lg:top-[-65px] left-[-29px] sm:left-[15px] lg:left-[30px]">
                    <MediumBubble />
                </div>
                <div className="absolute hidden md:block md:top-[-90px] lg:top-[-135px] md:right-[145px] lg:right-[200px]">
                    <MediumBubble />
                </div>
                <div className="absolute top-[65px] right-[5px]">
                    <MediumBubble />
                </div>
                <div className="absolute top-[375px] right-[0px] sm:right-[30px] lg:right-[60px]">
                    <MediumBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[565px] sm:right-[18px] lg:right-[30px]">
                    <MediumBubble />
                </div> */}
                <div className="absolute top-[372px] sm:top-[523px] lg:top-[550px] left-[-14px] sm:left-[4px] md:left-[33px] lg:left-[50px]">
                    <MediumBubble />
                </div>
                <div className="absolute top-[611px] sm:top-[847px] md:top-[852px] left-[-17px] md:left-[5px] lg:left-[10px]">
                    <MediumBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[880px] md:top-[900px] sm:left-[326px] md:left-[354px] lg:left-[439px]">
                    <MediumBubble />
                </div>
                <div className="absolute sm:hidden md:block top-[600px] sm:top-[875px] md:top-[880px] right-[112px] sm:right-[209px] md:right-[264px] lg:right-[312px]">
                    <MediumBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[820px] md:top-[820px] sm:right-[159px] lg:right-[247px]">
                    <MediumBubble />
                </div>
                {/* <div className="absolute top-[70px] sm:top-[80px] lg:top-[188px] left-[-5px] sm:left-[43px] lg:left-[90px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[-10px] sm:top-[197px] lg:top-[212px] left-[172px] sm:left-[4px] lg:left-[5px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[-70px] sm:top-[-53px] lg:top-[-43px] left-[158px] sm:left-[205px] lg:left-[225px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[-283px] lg:top-[19px] left-[0px] sm:left-[732px] lg:left-[732px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[-144px] sm:top-[-148px] left-[182px] sm:left-[481px] md:left-[532px] lg:left-[578px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[-51px] sm:top-[16px] right-[0px] sm:right-[15px] lg:right-[96px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[207px] right-[0px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[422px] right-[0px] sm:right-[35px] lg:right-[65px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[517px] right-[0px] sm:right-[25px] lg:right-[55px]">
                    <SmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[722px] sm:right-[35px] lg:right-[45px]">
                    <SmallBubble />
                </div> */}
                <div className="absolute top-[324px] sm:top-[466px] lg:top-[493px] left-[-8px] sm:left-[9px] md:left-[40px] lg:left-[61px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[407px] sm:top-[558px] lg:top-[582px] left-[4px] sm:left-[33px] md:left-[61px] lg:left-[79px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[575px] sm:top-[780px] md:top-[793px] left-[-6px] sm:left-[-6px] md:left-[14px] lg:left-[20px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[640px] sm:top-[894px] md:top-[899px] left-[12px] sm:left-[12px] md:left-[34px] lg:left-[39px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[594px] sm:top-[815px] md:top-[820px] left-[95px] sm:left-[149px] md:left-[155px] lg:left-[211px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[633px] sm:top-[880px] md:top-[880px] left-[75px] sm:left-[139px] md:left-[145px] lg:left-[201px]">
                    <SmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[810px] md:top-[840px] sm:left-[270px] lg:left-[358px]">
                    <SmallBubble />
                </div>
                <div className="absolute top-[614px] sm:top-[768px] md:top-[815px] left-[153px] sm:left-[377px] md:left-[428px] lg:left-[455px]">
                    <SmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[972px] sm:left-[192px] md:left-[200px] lg:left-[262px]">
                    <SmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[900px] md:top-[955px] sm:left-[258px] md:left-[491px] lg:left-[427px]">
                    <SmallBubble />
                </div>
                <div className="absolute hidden sm:block md:hidden sm:top-[960px] sm:right-[277px]">
                    <SmallBubble />
                </div>
                <div className="absolute hidden md:block md:top-[984px] right-[6px] md:right-[360px] lg:right-[391px]">
                    <SmallBubble />
                </div>
                {/* <div className="absolute top-[-45px] sm:top-[-42px] left-[170px] sm:left-[473px] md:left-[524px] lg:left-[570px]">
                    <XSmallBubble />
                </div>

                <div className="absolute top-[38px] sm:top-[73px] right-[5px] sm:right-[21px] lg:right-[106px]">
                    <XSmallBubble />
                </div>
                <div className="absolute top-[297px] right-[8px] lg:right-[8px]">
                    <XSmallBubble />
                </div>
                <div className="absolute top-[376px] right-[2px] sm:right-[19px] lg:right-[32px]">
                    <XSmallBubble />
                </div>
                <div className="absolute top-[608px] sm:top-[663px] right-[15px] lg:right-[35px]">
                    <XSmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[838px] sm:right-[10px]">
                    <XSmallBubble />
                </div>
                <div className="absolute top-[153px] right-[0px] sm:right-[7px]">
                    <XSmallBubble /> 
                </div>*/}
                <div className="absolute top-[618px] sm:top-[846px] md:top-[851px] left-[110px] sm:left-[165px] md:left-[171px] lg:left-[228px]">
                    <XSmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[840px] md:top-[860px] sm:left-[260px] lg:left-[348px]">
                    <XSmallBubble />
                </div>
                <div className="absolute top-[640px] sm:top-[930px] right-[149px] sm:right-[247px] md:right-[306px] lg:right-[346px]">
                    <XSmallBubble />
                </div>

                <div className="absolute top-[643px] sm:top-[1019px] right-[52px] sm:right-[103px]">
                    <XSmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[891px] sm:right-[162px] md:right-[170px] lg:right-[222px]">
                    <XSmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[1010px] sm:left-[162px] md:left-[170px] lg:left-[222px]">
                    <XSmallBubble />
                </div>

                <div className="absolute hidden sm:block sm:top-[925px] sm:left-[182px] md:left-[190px] lg:left-[252px]">
                    <XSmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[993px] sm:left-[40px] md:left-[51px] lg:left-[68px]">
                    <XSmallBubble />
                </div>
                <div className="absolute hidden sm:block sm:top-[1025px] sm:left-[316px] md:left-[330px] lg:left-[427px]">
                    <XSmallBubble />
                </div>
                <div className="absolute top-[500px] sm:top-[650px] left-[6px] sm:left-[16px] md:left-[40px] lg:left-[27px]">
                    <XSmallBubble />
                </div>

                <div className="absolute hidden md:block md:top-[855px] md:left-[542px] lg:left-[542px]">
                    <XSmallBubble />
                </div>
                <div className="absolute top-[605px] sm:top-[805px] right-[224px]">
                    <XSmallBubble />
                </div>
            </div>
        </div>
    );
}

function LargeBubble() {
    return (
        <div className="flex relative bubble w-[45px] h-[37px] border-[3px] m-2 text-xl font-bold font-special">
            <p className="absolute top-[-8px] right-[8px] rotate-[-66deg]">
                ){" "}
            </p>
        </div>
    );
}

function MediumBubble() {
    return (
        <div className="flex relative bubble w-[35px] h-[27px] border-[2px] m-2 text-base font-bold font-special">
            <p className="absolute top-[-6px] sm:top-[-8px] right-[6px] sm:right-[5px] rotate-[-66deg]">
                ){" "}
            </p>
        </div>
    );
}

function SmallBubble() {
    return (
        <div className="flex bubble w-[18px] h-[14px] border-[2px] m-2 text-xl font-bold font-special"></div>
    );
}

function XSmallBubble() {
    return (
        <div className="flex bubble w-[8px] h-[6px] border-[1px] m-2 text-xl font-bold font-special"></div>
    );
}

// After animation subtract
// -250px from top for large bubbles
// -195px from top for med bubbles
// -93px from top for small bubbles
// -37 from top for xs bubbles
