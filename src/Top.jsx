import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Accordion from './Accodion';
import ManyInput from './form';
import Header from './Header';
import Footer from './footer';

// ファーストビュー
const Firstview = () => {
    return (
        <>
            <div className='w-full h-screen relative'>
                <div className='w-full h-[80vh] bg-firstview bg-contain bg-no-repeat absolute z-0'></div>
                <p className='w-[30%] mx-auto pt-[5%] z-10 relative'><img src="./fv-text1.png" alt="スマホ一台で丸ごとOK" className="w-full" /></p>
                <div className='w-full h-screen relative z-[1]'>
                    <p className='w-[70%] absolute top-0 left-[15%]'><img src="./fv-text2.png" alt="防災" className="w-full" /></p>
                    <img src="./fv-woman.png" alt="女性の画像" className="w-[30%] relative z-10 mx-auto top-0" />
                    <p className='w-[60%] absolute top-[35%] left-[20%] z-20'><img src="./fv-text3.png" alt="ポッケ" className="w-full" /></p>
                </div>
            </div>
        </>
    )
}

const Slider = () => {
    const slidata = {
        id: [1, 2, 3, 4],
        h3: ["賞味期限の確認を忘れてしまう",
            "時間を割くのがもったいない",
            "何を揃えたら良いのかわからない"],
        text: ["忘れがちな食材の賞味期限を近づいたら自動でお知らせ。",
            "前回購入した商品がわかるからより少ない時間でらくらくチェック",
            "なにを交換しなくてはいけないかわからない方でも。おすすめの商品を安心管理。"],
        img: []
    }
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>

        </Swiper>
    )
}

const Top = () => {
    const stepdata = {
        "id": [1, 2, 3, 4],
        "text": ["まずは会員登録", "カートに入れる", `スマホ1台!30秒でお申し込み`, "商品が届く"],
        "img": ["./step1.png", "./step2.png", "./step3.png", "./step4.png"]
    }
    return (
        <>
            <Header/>
            <main className='bg-[#F5F5F5]'>
                <Firstview />
                
                <div className='w-full'>
                    {/* about */}
                    <section className='pt-40 w-[80%] mx-auto'>
                        <h2 className=' font-bold text-[40px] text-[#284F43]'>
                            30秒で続けられる防災準備
                        </h2>

                        <div className='w-full lg:flex lg:justify-between pt-32 mx-auto text-center pb-60'>
                            <section>
                                <h3 className='font-bold text-2xl leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br/>が、かなえてくれる
                                </h3>
                                <p className='text-base pt-8 leading-10'>
                                    いざというときに備えたい、<br />
                                    重い腰があがらない、<br />
                                    何から始めていいかわからない、<br />
                                    そんな「めんどくさい」を解決してくれるのが<br />
                                    <span className='text-xl font-bold text-[#284F43]'>ぼうさいポッケ</span>なのです。
                                </p>
                            </section>
                            <section>
                                <h3 className='font-bold text-2xl leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br />が、かんたん管理
                                </h3>
                                <p className='text-base pt-8 leading-10'>
                                    忘れがちな消費期限も、<br />
                                    通知でお知らせしてくれるから<br />
                                    うっかり忘れもなくて安心！<br />
                                </p>
                            </section>
                            <section>
                                <h3 className='font-bold text-2xl leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br/>が、らくらくつづく
                                </h3>
                                <p className='text-base pt-8 leading-10'>
                                    めんどうな防災管理が<br />
                                    スマホ一台だから<br />
                                    継続して続けやすい！<br />
                                </p>
                            </section>
                        </div>
                    </section>


                    <div className=' w-full  bg-[#D6E7DA] relative'>
                        <div className=' absolute top-[-45px]'>
                            <img src="./gizagiza.png" alt="境界線" />
                        </div>
                        <section className='w-[80%] mx-auto pt-[180px]'>
                            <h2 className=' font-bold text-[32px] text-[#284F43] pl-[120px] pb-[140px]'>
                                購入までのステップ
                            </h2>
                            <div className=' flex mx-auto'>
                                {
                                    stepdata.text.map((data, index) => (
                                        <div className='w-full relative'>
                                            <div className='text-center w-[90%]'>
                                                <figure className=' w-full'>
                                                    <img src={stepdata.img[index]} alt="stepの画像" className='w-[80%] mx-auto' />
                                                </figure>
                                                <p className=' text-[20px] text-[#284F43]'>step{index + 1}</p>
                                                <p className=' text-[20px] font-bold text-[#284F43]'>{data}</p>
                                            </div>
                                            {
                                                (()=>{
                                                    if(index<stepdata.id.length-1){
                                                        return(
                                                            <p className='w-[5%] absolute top-[33%] right-0'><img src="./arow.png" alt="" /></p>
                                                        )
                                                    }
                                                })()
                                            }
                                        </div>
                                        
                                    ))
                                }
                            </div>


                        </section>
                    </div>
                </div>

                <div className='relative w-full bg-[#D6E7DA] pb-[500px] pt-[200px]'>
                    {/* <div className='absolute'>
                        <img src="./gizagiza2.png" alt="境界線" />
                    </div> */}
                    <section className=' w-[80%] mx-auto'>
                        <h2 className=' font-bold text-[42px] pl-[100px] text-[#284F43]'>
                            こんな方に<br />おすすめ
                        </h2>

                        <Slider />
                    </section>

                </div>

                <div className='relative w-full bg-[#D6E7DA] pb-[300px] pt-[200px]'>
                    {/* <div className='absolute'>
                        <img src="./gizagiza2.png" alt="境界線" />
                    </div> */}
                    <section className=' w-[80%] mx-auto'>
                        <h2 className=' font-bold text-[32px] text-[#284F43] pl-[20px] pb-[30px]'>
                            よくあるご質問
                        </h2>
                        <Accordion
                            title= "注文してからどれくらいで届きますか？"
                            content="This is the content of the first accordion."
                        />
                        <Accordion
                            title="置き配はできますか？"
                            content="This is the content of the second accordion."
                        />
                        <Accordion
                            title="やめたい場合はどうしたらいいですか？"
                            content="This is the content of the third accordion."
                        />
                        <Accordion
                            title="申し込みはどこからすればいいですか？"
                            content="This is the content of the third accordion."
                        />
                        <Accordion
                            title="手数料（配達料）はいくらですか？"
                            content="This is the content of the third accordion."
                        />

                    </section>

                </div>

                <div className='relative w-full bg-[#F5F5F5] pb-[300px] pt-[200px]'>
                    <div className='absolute top-[-100px]'>
                            <img src="./gizagiza3.png" alt="境界線" />
                    </div>
                
                    <section className=' w-[80%] mx-auto'>
                        <h2 className=' font-bold text-[32px] text-[#284F43] pl-[20px] pb-[60px]'>
                            新規会員登録はこちら
                        </h2>
                        <div className=' w-[80%] bg-[#E0EBE3] mx-auto'>
                            <ManyInput/>
                        </div>

                    </section>

                </div>

            </main>
            <Footer/>

        </>
    )
}

export default Top