import React from "react";
import { useRef } from "react";
import views from "../assets/WhatsApp Image 2023-05-09 at 9.13.41 PM.jpeg";
import time from "../assets/WhatsApp Image 2023-05-09 at 9.17.36 PM.jpeg";
import { Link } from "react-router-dom";
import product from "../assets/productimage.png";

const comments = [
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava01.jpg",
    name: "रमेश के.सी",
    comment:
      "मैले पनि ह्यामर अफ थोरको एक इन्टरभ्युवबाट जानकारी प्राप्त गरेको थिएँ, तर मलाई लाग्यो कि त्यो पोर्न अभिनेत्रीको बारेमा थियो। यो जस्तो सामान सचमुच अहिष्टो हो। मैले यसलाई मात्र ३ दिनदेखि उपयोग गरेको छु र पहिलोपटक +२ सेन्टिमिटरको परिणाम प्राप्त गरेको छु। यसले मलाई धेरै सन्तुष्टिपूर्ण बनाएको छ! :)",
    coverimgUrl: "",
    date: "०१.०५.२०२३",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava02.jpg",
    name: "बिपिन गिरी",
    comment:
      "अजीज, तपाईं अद्भुत हुनुहुन्छ। म सधैं खुशी संग तपाईको ब्लग पढ्छु। हिजो मैले ह्यामर अफ थोर अर्डर गरें, र यो आज डेलिभर गरिनु पर्छ। नतिजा पछि बताउनेछु!",
    coverimgUrl: "",
    date: "०१.०५.२०२३",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava03.jpg",
    name: "अमित रेग्मी",
    comment:
      "अर्डर प्रक्रिया धेरै सरल छ। मैले अर्डर गरेको दुई दिन पछि मेलमा प्राप्त गरें। मुरी मुरी धन्यवाद!",
    coverimgUrl: "",
    date: "०२.०५.२०२३",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava04.jpg",
    name: "राजीव तामाङ",
    comment:
      "म एक महिनाको लागि प्रत्येक दिन ह्यामर अफ थोर प्रयोग गरिरहेको थिएँ। नतिजा मात्र प्रज्वलित छ। 8 सेन्टिमिटर। केटीहरू अब पागल छन्!",
    coverimgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__img01.jpg",
    date: "०२.०५.२०२३",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava05.jpg",
    name: "रमेश तामाङ",
    comment:
      "म मेरो जीवनसाथीलाई वार्षिकोत्सवको लागि उपहार बनाउँछु, ताकि उसले मलाई सकेसम्म खुसी बनाउन सकोस् 😋",
    coverimgUrl: "",
    date: "०३.०५.२०२३",
  },

  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava07.jpg",
    name: "अफिक",
    comment:
      "मैले कम्तिमा 3 सेन्टिमिटर प्राप्त गर्न धेरै बकवास प्रयास गरेको छु... मैले ह्यामर अफ थोरको प्रयास नगरेसम्म सबै व्यर्थ थियो। अजिज, धन्यवाद। तपाईं र तपाईंको ब्लगले मेरो जीवनमा आमूल परिवर्तन ल्याएको छ। मैले ह्यामर अफ थोर अर्डर गरें र मेरो लिंग लामो मात्र होइन, मोटो पनि भयो। ७ सेन्टिमिटर लम्बाइ र १.५ चौडाइ।",
    coverimgUrl: "",
    date: "०५.०५.२०२३",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava09.jpg",
    name: "डा रमेश तामाङ",
    comment:
      " जिज्ञासाको कारण यो आफैंको लागि अर्डर गरें, हामी एक हप्तामा के हुन्छ हेर्नेछौं",
    coverimgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__img03.jpg",
    date: "०३.०५.२०२३",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava10.jpg",
    name: "हरिबहादुर गिरी",
    comment:
      "मेरो विवाह लगभग सकिएको थियो र यो पोस्टले मेरो विवाहलाई एक तरिकाले बचाएको छ। ह्यामर अफ थोरले मलाई मेरो लिंग 6 सेन्टिमिटरले मात्र ठूलो बनाउन मद्दत गर्‍यो, तर मेरो शक्तिलाई पनि पुनर्स्थापित गर्‍यो। राम्रो सेक्स सुखी र लामो सम्बन्धको कुञ्जी हो, र हयामर अफ थोर राम्रो सेक्सको कुञ्जी हो",
    coverimgUrl: "",
    date: "०६.०५.२०२३",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava11.jpg",
    name: "भुवन थापा",
    comment:
      "मैले यो पढेपछि आफ्नो लागि हयामर अफ थोर अर्डर गर्ने निर्णय गरें। साथीहरू, यो साँच्चै काम गर्दछ। मैले एक हप्तामा मेरो लिंग 4 सेन्टिमिटरले ठूलो बनाएको छु, र अहिले मलाई 15 वर्ष पहिले जस्तै लगातार धेरै घण्टासम्म बोनर छ। यति ठूलो छुट हुँदा यसलाई किन्नुहोस्",
    coverimgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__img04.jpg",
    date: "",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava05.jpg",
    name: "नफिसा",
    comment:
      "म मेरो जीवनसाथीलाई वार्षिकोत्सवको लागि उपहार बनाउँछु, ताकि उसले मलाई सकेसम्म खुसी बनाउन सकोस् 😋",
    coverimgUrl: "",
    date: "०३.०५.२०२३",
  },
  {
    imgUrl:
      "https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/comments__ava13.jpg",
    name: "करण चौधरी",
    comment:
      "मैले यो मेरो लिंगलाई ठूलो बनाउनको लागि किनेको थिएँ, र मैले सेक्सको साथ मेरा सबै समस्याहरू समाधान गरें। अब कुनै समयपूर्व स्खलन र सुस्त बोनर छैन! म यसलाई २ महिनादेखि प्रयोग गरिरहेको छु र मेरो लिंग १२ देखि १८ सेन्टिमिटर बढ्यो।",
    coverimgUrl: "",
    date: "०८.०५.२०२३",
  },
];
const Home = () => {
  const pageRef = useRef(null);

  const scrollToPage = () => {
    window.scrollTo({
      top: pageRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#F5F5F5]">
      <div className="xl:max-w-[820px] px-6 xl:px-0 w-full mx-auto mt-[-68px] ">
        <div className="flex gap-48 justify-between  items-center">
          <div>
            <div className="xl:w-[280px] xl:h-[280px] w-[350px] h-[350px]">
              <img
                className="w-full h-full "
                src="https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/header__logo.svg"
              />
            </div>
          </div>
          <div className=" xl:w-[100%] mx-[140px] xl:mx-0 pb-20  xl:pb-0 xl:px-0">
            <div className="relative ">
              <input
                type="search"
                className="px-10 py-[6px] xl:block hidden rounded-full w-full border-2"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              {/*Search icon*/}
              <span id="basic-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="xl:h-5 xl:w-6 bg-white  xl:bg-none p-3 xl:p-0 rounded-full xl:shadow-none shadow-md h-20 w-20 left-[6px] top-[10px] absolute"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl  mt-[-40px] pt-8 ">
          <div className="px-10">
            <div className="flex xl:gap-3 gap-5 text-gray-900 ">
              <div className=" flex items-center gap-2 xl:text-[18px] text-[40px]">
                <span className="">
                  <img src={views} className="xl:w-[20px] w-[40px]" />
                </span>
                <span> 01.05.2023</span>
              </div>
              <div className=" flex items-center gap-2 xl:text-[18px] text-[40px]">
                <span className="">
                  <img className="xl:w-[15px] w-[40px]" src={time} />
                </span>
                <span> 01.05.2023</span>
              </div>
            </div>
            <h1 className="font-bold xl:text-[36px] text-6xl leading-[100px] mt-4 mb-[25px] xl:leading-[50px]">
              तपाईंलाई ७ दिनमा तपाईंको लिङ्गलाई ४ सेमी ठुलो बनाउन सहज उपाय
              चाहिएमा? यो पोस्ट अन्तिम सम्म पढ्नुहोस् र तपाईंलाई एउटा राम्रो
              उपहार प्राप्त हुनेछ।
            </h1>
            <div className="flex xl:flex-row flex-col gap-5">
              <div className="">
                <div>
                  <img
                    className="w-full h-auto"
                    src="https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/promo__img01.jpg"
                  />
                </div>
              </div>
              <div>
                <div>
                  <img
                    className="w-full h-auto"
                    src="https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/promo__img02.jpg"
                  />
                </div>
              </div>
            </div>

            <p className="xl:text-[18px] text-[44px] leading-[70px]  xl:leading-8 font-normal py-[30px]">
              सबै मेरो चाहना पाठकहरुलाई नमस्कार। मेरो नाम अझी पनि अजीज हो र आज म
              एक धेरै महत्वपूर्ण र रोचक पुरुषको गोप्त सेक्रेट साझा गर्न चाहन्छु।
              😎 जसले यहाँ मेरो अधिक भन्दा एक वर्ष भन्दा बढी समयसम्म मलाई अनुसरण
              गर्नु भएका छन्, उनीहरुले याद गर्ने हुन सक्छन् कि मैले धेरै
              आदर्शहीन र उबाउने जीवन बिताउँदछिन्, र मैले कुनै छोरीहरुबाट सुख
              नलिने थिए। सानो लिङ्ग आत्मविश्वासलाई तेजीसँग प्रभावित गर्दछ,
              त्यसैले म धेरै समयसम्म असुरक्षित पुरुष थिएँ जसलाई सम्पलिंग गर्न
              केवल माइक्रो भ्यागिना भनेर छान्न सकेँ। 😞
            </p>

            <div className="flex justify-center">
              <img
                className="w-full xl:w-[70%] my-5 xl:my-2"
                src="https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/article__img01.jpg"
              />
            </div>

            <p className="xl:text-[18px] text-[44px] leading-[70px]  xl:leading-8  font-normal py-[30px]">
              व्यक्तिगत जीवनको कमी भएको कारण, मैले घण्टा घण्टा कम्प्युटरमा बसेर
              सबैभन्दा राम्रो पोर्न भिडियो खोज्दा थिएँ, र एउटा छिनमा म सेक्स
              पोर्न खोज्दै थिएँ, र त्यसैले मैले एक अप्रत्याशित रूपमा पोर्न
              अभिनेताको संवाद देखेर मलाई हेर्न लागेको थियो। भिडियोमा, उनले पोर्न
              उद्योगका सबै गुप्त रहस्यहरू प्रकट गरे, र म एउटा प्रयोग गर्ने
              ठानेँ। 😊 यो पत्ता लाग्यो कि पोर्नमा सबै पुरुषहरूले आग्रह गर्न
              सक्दैनन् कि उनीहरुले यस उद्योगमा पहिलो आएपछि ठुलो MR.BIG लिङ्ग तलास्न
              सकेको। दुनिया भरका पोर्न अभिनेताहरूले  प्रयोग गरेर
              लिङ्ग ठुलो गर्नु र पावर बढाउनु थालेका थिए। 👌
            </p>
          </div>

          <div className="bg-[#E7E7E7] flex  xl:flex-row flex-col xl:p-[30px]">
            <div className="xl:w-[50%]">
              <img
                className="w-full xl:w-[90%] px-48 xl:px-0"
                src="https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/doc__img01.jpg"
              />
              <p className="xl:text-[22px] mt-10 xl:mt-0 text-[44px] text-center xl:text-left leading-[50px] xl:leading-[28px] font-sans  font-bold">
                डा रमेश तामाङ
              </p>
            </div>
            <div className="xl:w-[90%]">
              <p className="xl:text-[18px] px-8 xl:px-0 py-5 xl:py-0 text-[44px] leading-[70px] xl:leading-[40px] font-bold">
                <span className="text-[#218DF0] hover:underline cursor-pointer">
                  {" "}
                  MR.BIG
                </span>{" "}
                एक अनोखो उत्पाद हो जुन आफ्नो असल आधारमा पुरुषको शारीरिक प्रकृतिक
                क्रियाकलापहरूको सक्रिय वृद्धि गर्ने उत्पाद हो। लिङ्ग वृद्धि
                कोशिश सेल खिंचाव वज्रहरूबाट हुन्छ, सर्जरी अतीतको कुरा हो। लिङ्ग
                हर हप्ता ४ सेन्टिमिटर बढ़्दछ! MR.BIG मात्र प्राकृतिक
                घटकहरू मात्र परिवर्तन गर्दछ, यसकारण स्वास्थ्यलाई केही पनि नुकसान
                पुर्‍याउँदैन।
              </p>
            </div>
          </div>
          <div className="px-10">
            <p className="xl:text-[18px] text-[44px]  leading-[70px] xl:leading-8 font-normal py-[30px]">
              आश्चर्यजनक! 😲 ह्यामर अफ थोरको मात्र एक हप्तामा प्रयोग गरेपछि मेरो
              लिङ्ग ११ देखि १५ सेन्टिमिटरसम्म बढ़्यो, र एक महिना पछि मेरो
              लिङ्गको आकार २१ सेन्टिमिटरसम्म पुगेको थियो। म अन्तिम रुपमा थोरै 💪
              आत्मविश्वासी भये, र केही समयपछि केही छोरीहरूले मलाई अहँदाको साथ
              लिन सुरु गरेका थिए। तब पछि कुनै स्त्रीले निराश वा असंतुष्ट भएको
              थियो। 😎 तिनीहरूले मेरो लिङ्ग धेरै मन पर्यो। अब ह्यामर अफ थोर
              सार्वजनिक रूपमा उपलब्ध भएको छ, यसकारण कुनै पुरुष उपलब्धिमूलक
              मूल्यमा आफ्नो लिङ्ग विस्तार गर्न सक्दछ। 🤩 के तपाईंलाई ठुलो र कठिन
              लिङ्ग चाहिन्छ? के तपाईंलाई अडिग आत्मविश्वास चाहिन्छ? के तपाईंले मन
              पर्ने छोरीहरूसँग सेक्स गर्न चाहनुहुन्छ, र उपेक्षित रहने छोरीहरूसँग
              होइन? ह्यामर अफ थोरको आदेश गर्नुहोस् र आफ्ना सबै इच्छाहरू ७ दिनमा
              पूरा हुनेछन्। र मेरो ब्लगका सब
            </p>
            <div className="py-3 flex justify-center">
              <img
                className="w-full xl:w-[55%]"
                src="https://trushblog.health-beauty.pro/rmk/sg_hammerofthor_4086/sg_hammer_smiles_redis_eng/img/article__img02.jpg"
              />
            </div>
          </div>
          <div className="bg-[#F1E6D8] px-[30px] py-[30px]">
            <p className="font-bold xl:text-[22px]  text-[44px]  leading-[70px]   xl:leading-8">
              यस उत्पादको उत्साहजनकताको कारण, नकली उत्पादन बेच्ने मामलाहरू अधिक
              फैलिएका छन्। MR.BIG मन्त्रालयबाट अधिकृत रुपमा लाइसेन्स
              प्राप्त गर्नुभएको छ। नकली उत्पादन सावधानीपूर्वक बारे मन पराएर
              राख्नुहोस्।
            </p>
            <hr className="border-t-4 border-[#EA2525] my-8" />
            <p className="xl:text-[18px]  text-[44px]  leading-[70px]  ">
              यहाँ छविहरू र भिडियोहरूको प्रयोग अनुमति छ। अन्य वेब पृष्ठहरूका
              लागि फोटोहरूको प्रयोग अनुमति छैन।
            </p>

            <p className="font-bold py-5  text-[44px]  leading-[70px]  xl:text-[18px] xl:leading-8">
              हाम्रो पाठकहरूलाई वितरकहरूबाट विशेष छुट दिइन्छौं, र हामी पनि
              गारन्टी दिन्छौं: यदि उत्पादन प्रभावकारी हुँदैन भने, खरिदको मूल्यको
              १००% वापसी गरिनेछ। यो छुट एक सीमित समयका लागि मात्र वैध हुनेछ।
            </p>
            <div className="flex justify-center">
              <img className="w-[35%] xl:w-[40%]" src={product} />
            </div>
            <div className="font-bold flex pt-10 justify-center">
              <button
                onClick={scrollToPage}
                className="bg-[#EA2525] transform  text-[44px]  leading-[70px]  hover:scale-105 transition duration-300 text-white rounded-[50px] xl:text-[20px] xl:leading-[50px] text-center xl:px-[40px] py-2 w-full px- xl:max-w-[580px] font-extrabold"
              >
                50% छुटमा MR.BIG अर्डर गर्नुहोस्
              </button>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h1 className="xl:text-[22px] text-[44px] font-bold text-[#3E3E3E] leading-8 mb-[50px]">
            टिप्पणीहरू :
          </h1>
          <ul>
            {comments.map((comment) => {
              return (
                <>
                  <li>
                    <div className="rounded-[20px] flex xl:flex-row flex-col gap-5 xl:gap-0   mb-[25px] p-[20px] shadow-lg bg-white">
                      <div className="w-[16%] flex xl:flex-none items-center gap-5">
                        <img
                          class="xl:w-20 xl:h-20 w-32 h-32 rounded-full"
                          src={comment.imgUrl}
                          alt="Rounded avatar"
                        />
                        <p className="xl:text-[28px] text-[34px] xl:hidden block text-[#3e3e3e] leading-8 font-bold">
                          {comment.name}
                        </p>
                      </div>
                      <div className="w-[100%]">
                        <p className="xl:text-[18px] text-[54px] hidden xl:block text-[#3e3e3e] leading-8 font-bold">
                          {comment.name}
                        </p>
                        <p className="xl:leading-8 text-[44px] xl:text-[18px] leading-[70px] font-medium">
                          {comment.comment}
                        </p>
                        <img className="py-2" src={comment.coverimgUrl} />
                        <p className="py-3 text-4xl  xl:text-[14px]">
                          {comment.date}
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
          <div
            ref={pageRef}
            className="font-bold flex flex-col items-center justify-center"
          >
            <Link to="/hammer">
              <button className="bg-[#EA2525] px-20 transform  text-[44px]  leading-[70px]  hover:scale-105 transition duration-300 text-white rounded-[50px] xl:text-[20px] xl:leading-[50px] text-center xl:px-[40px] py-2 w-full px- xl:max-w-[580px] font-extrabold">
                50% छुटमा MR.BIG अर्डर गर्नुहोस्
              </button>
            </Link>

            <div className="text-center mt-4 text-[44px] xl:text-[18px] text-red-900">
              {" "}
              Report
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
