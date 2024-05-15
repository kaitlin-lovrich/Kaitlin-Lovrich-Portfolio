import {
    LargeBubbleProps,
    MediumBubbleProps,
    SmallBubbleProps,
    XSmallBubbleProps,
} from "../lib/dataTypes";

export default function Background() {
    return (
        <div className="relative z-0">
            <Flowers />
            <Bubbles />
        </div>
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
                <div className="absolute top-[-199px] sm:top-[-223px] md:top-[-210px] left-[229px] sm:left-[433px] md:left-[484px] lg:left-[530px]">
                    <LargeBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[-261px] sm:top-[-230px] right-[6px] sm:right-[25px] lg:right-[100px]">
                    <LargeBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[15px] left-[110px]">
                    <LargeBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[-92px] left-[250px]">
                    <LargeBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[-44px] left-[550px]">
                    <LargeBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[-107px] right-[226px]">
                    <LargeBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[-149px] right-[420px]">
                    <LargeBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden lg:block top-[-49px] right-[629px]">
                    <LargeBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[2675px]:block top-[-272px] right-[1809px]">
                    <LargeBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2370px]:block top-[-204px] right-[1452px]">
                    <LargeBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1670px]:block top-[-284px] right-[757px]">
                    <LargeBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[-190px] lg:top-[-180px] left-[170px] sm:left-[220px] lg:left-[240px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[-98px] sm:top-[-80px] lg:top-[-65px] left-[-29px] sm:left-[15px] lg:left-[30px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block md:top-[-90px] lg:top-[-135px] md:right-[145px] lg:right-[200px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[65px] right-[5px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[375px] right-[0px] sm:right-[30px] lg:right-[60px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[565px] sm:right-[18px] lg:right-[30px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2675px]:block top-[-77px] right-[1779px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[372px] sm:top-[328px] lg:top-[355px] left-[-14px] sm:left-[4px] md:left-[33px] lg:left-[50px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden lg:block top-[295px] left-[343px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[416px] sm:top-[652px] md:top-[657px] left-[-17px] md:left-[5px] lg:left-[10px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[685px] md:top-[705px] sm:left-[326px] md:left-[354px] lg:left-[480px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute sm:hidden min-[905px]:block top-[405px] sm:top-[680px] md:top-[685px] right-[112px] sm:right-[209px] md:right-[264px] lg:right-[312px] xl:hidden">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[625px] sm:right-[159px] lg:right-[247px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1460px]:block top-[523px] left-[253px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[452px] left-[548px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[153px] left-[266px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden xl:block top-[-117px] left-[488px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[124px] left-[584px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[11px] left-[766px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[579px] left-[750px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[355px] left-[799px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1755px]:block top-[783px] right-[1008px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[48px] right-[203px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[83px] right-[614px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[566px] right-[398px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[155px] right-[360px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[342px] right-[275px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[425px] right-[479px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden lg:block top-[552px] right-[765px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden lg:block top-[274px] right-[734px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden lg:block top-[-53px] right-[771px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2105px]:block top-[-195px] right-[1123px]">
                    <MediumBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1260px]:block top-[-264px] right-[390px]">
                    <MediumBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[-10px] sm:top-[197px] lg:top-[212px] left-[172px] sm:left-[4px] lg:left-[5px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[-70px] sm:top-[-53px] lg:top-[-43px] left-[158px] sm:left-[205px] lg:left-[225px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[-283px] lg:top-[19px] left-[0px] sm:left-[732px] lg:left-[732px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[-144px] sm:top-[-148px] left-[182px] sm:left-[481px] md:left-[532px] lg:left-[578px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[-51px] sm:top-[16px] right-[0px] sm:right-[15px] lg:right-[96px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[207px] right-[0px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[517px] right-[0px] sm:right-[25px] lg:right-[55px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[722px] sm:right-[35px] lg:right-[45px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[231px] sm:top-[373px] lg:top-[400px] left-[-8px] sm:left-[9px] md:left-[40px] lg:left-[61px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[314px] sm:top-[465px] lg:top-[489px] left-[4px] sm:left-[33px] md:left-[61px] lg:left-[79px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[482px] sm:top-[687px] md:top-[700px] left-[-6px] sm:left-[-6px] md:left-[14px] lg:left-[20px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[801px] md:top-[806px] sm:left-[12px] md:left-[34px] lg:left-[39px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[501px] sm:top-[722px] md:top-[727px] left-[95px] sm:left-[149px] md:left-[155px] lg:left-[211px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[540px] sm:top-[787px]  left-[75px] sm:left-[139px] md:left-[145px] lg:left-[201px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute block top-[521px] sm:top-[675px] md:top-[733px] left-[153px] sm:left-[377px] md:left-[428px] lg:left-[471px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[879px] sm:left-[192px] md:left-[200px] lg:left-[262px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1000px]:block md:top-[891px] right-[6px] md:right-[360px] lg:right-[391px] xl:hidden">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden xl:block top-[899px] right-[375px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1000px]:block md:top-[705px] md:right-[391px] ">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1235px]:block top-[913px] right-[564px] xl:hidden">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden xl:block top-[839px] right-[423px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block md:top-[839px] md:right-[220px] lg:right-[248px] xl:hidden">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1460px]:block top-[863px] xl:top-[823px] right-[800px] xl:right-[712px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1460px]:block top-[585px] left-[243px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[219px] left-[167px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[595px] left-[546px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[428px] left-[341px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[337px] left-[319px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[153px] left-[312px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[524px] left-[529px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[273px] left-[613px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[18px] left-[292px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[45px] left-[501px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[622px] left-[770px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[417px] left-[759px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1664px]:block top-[79px] left-[782px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1750px]:block top-[161px] left-[574px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1755px]:block top-[924px] right-[1052px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1755px]:block top-[761px] right-[1064px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block sm:top-[712px] sm:right-[224px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[57px] right-[100px] xl:hidden">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2105px]:block top-[904px] right-[1377px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2445px]:block top-[818px] right-[1753px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[2105px]:block top-[859px] right-[1365px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[381px] right-[247px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[208px] right-[407px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[85px] right-[631px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden lg:block top-[29px] right-[786px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[487px] right-[268px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[467px] right-[513px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden lg:block top-[335px] right-[706px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[300px] right-[380px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[70px] right-[447px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[-10px] right-[416px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[121px] right-[208px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1460px]:block top-[878px] right-[705px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2370px]:block top-[-5px] right-[1478px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[2105px]:block top-[-57px] right-[1137px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1670px]:block top-[-72px] right-[773px]">
                    <SmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[2630px]:block top-[877px] right-[2044px]">
                    <SmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[-45px] sm:top-[-42px] left-[170px] sm:left-[473px] md:left-[524px] lg:left-[570px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[38px] sm:top-[73px] right-[5px] sm:right-[21px] lg:right-[106px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[297px] right-[8px] lg:right-[8px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[376px] right-[2px] sm:right-[19px] lg:right-[32px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[608px] sm:top-[603px] right-[15px] lg:right-[35px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[838px] sm:right-[10px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[153px] right-[0px] sm:right-[7px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[581px] sm:top-[809px] md:top-[814px] left-[110px] sm:left-[165px] md:left-[171px] lg:left-[228px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[803px] md:top-[372px] sm:left-[260px] lg:left-[348px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[905px]:block top-[603px] sm:top-[893px] right-[149px] sm:right-[247px] md:right-[306px] lg:right-[346px] xl:hidden">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute top-[606px] sm:top-[982px] right-[52px] sm:right-[103px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[854px] sm:right-[162px] md:right-[170px] lg:right-[222px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[973px] sm:left-[162px] md:left-[170px] lg:left-[222px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[888px] sm:left-[182px] md:left-[190px] lg:left-[252px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden sm:block sm:top-[956px] sm:left-[40px] md:left-[51px] lg:left-[68px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden sm:block lg:hidden sm:top-[988px] sm:left-[316px] md:left-[330px] lg:left-[427px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute top-[463px] sm:top-[613px] left-[6px] sm:left-[16px] md:left-[40px] lg:left-[64px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden lg:block lg:top-[796px] lg:right-[424px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1235px]:block lg:top-[1011px] right-[546px] xl:right-[440px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute sm:hidden top-[609px] left-[19px] sm:left-[12px] ">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1460px]:block top-[621px] left-[260px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[321px] left-[140px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1460px]:block top-[911px] right-[734px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[509px] left-[328px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[232px] left-[324px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[713px] left-[273px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[267px] left-[604px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[351px] left-[606px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[676px] left-[559px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[549px] left-[785px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[652px] left-[766px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1650px]:block top-[157px] left-[783px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[1755px]:block top-[798px] right-[1081px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2445px]:block top-[924px] right-[1734px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[2445px]:block top-[836px] right-[1738px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden min-[2105px]:block top-[984px] right-[1357px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2105px]:block top-[880px] right-[1393px] ">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden md:block top-[390px] right-[387px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden lg:block top-[667px] right-[780px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden lg:block top-[464px] right-[711px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden lg:block top-[210px] right-[668px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden md:block top-[271px] right-[622px]">
                    <XSmallBubble animation={"float-animate-2"} />
                </div>
                <div className="absolute hidden lg:block top-[103px] right-[757px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
                <div className="absolute hidden min-[2630px]:block top-[968px] right-[2058px]">
                    <XSmallBubble animation={"float-animate-1"} />
                </div>
            </div>
        </div>
    );
}

function LargeBubble({ animation }: LargeBubbleProps) {
    return (
        <div
            className={`${animation} flex relative bubble w-[45px] h-[37px] border-[3px] m-2 text-xl font-bold font-special`}
        >
            <p className="absolute top-[-8px] right-[8px] rotate-[-66deg]">
                ){" "}
            </p>
        </div>
    );
}

function MediumBubble({ animation }: MediumBubbleProps) {
    return (
        <div
            className={`${animation} flex relative bubble w-[35px] h-[27px] border-[2px] m-2 text-base font-bold font-special`}
        >
            <p className="absolute top-[-6px] sm:top-[-8px] right-[6px] sm:right-[5px] rotate-[-66deg]">
                ){" "}
            </p>
        </div>
    );
}

function SmallBubble({ animation }: SmallBubbleProps) {
    return (
        <div
            className={`${animation} flex bubble w-[18px] h-[14px] border-[2px] m-2 text-xl font-bold font-special`}
        ></div>
    );
}

function XSmallBubble({ animation }: XSmallBubbleProps) {
    return (
        <div
            className={`${animation} flex bubble w-[8px] h-[6px] border-[1px] m-2 text-xl font-bold font-special`}
        ></div>
    );
}

// After applying animation subtract
// -250px from top for large bubbles
// -195px from top for med bubbles
// -93px from top for small bubbles
// -37 from top for xs bubbles
