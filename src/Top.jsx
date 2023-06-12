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
                <div className='w-full lg:h-[80vh] lg:bg-firstview lg:bg-contain lg:bg-no-repeat lg:absolute lg:z-0'></div>
                <p className='lg:w-[30%] lg:mx-auto lg:pt-[5%] lg:z-10 lg:relative'><img src="./fv-text1.png" alt="スマホ一台で丸ごとOK" className="w-full" /></p>
                <div className='lg:w-full lg:h-screen lg:relative lg:z-[1]'>
                    <p className='lg:w-[70%] lg:absolute lg:top-0 lg:left-[15%]'><img src="./fv-text2.png" alt="防災" className="w-full" /></p>
                    <img src="./fv-woman.png" alt="女性の画像" className="lg:w-[30%] lg:relative lg:z-10 lg:mx-auto lg:top-0" />
                    <p className='lg:w-[60%] lg:absolute lg:top-[35%] lg:left-[20%] lg:z-20'><img src="./fv-text3.png" alt="ポッケ" className="w-full" /></p>
                </div>
            </div>
        </>
    )
}

const Slider = () => {

    return (
        <div className='lg:bg-iphon lg:bg-inherit lg:bg-no-repeat lg:h-[600px] lg:w-[50%] lg:mx-auto'>
            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {/* スライダーの要素 */}
            {/* 1つ目 */}
            <SwiperSlide>
                <div className='lg:w-[50%] lg:relative lg:pl-[20px] lg:pt-[120px]'>
                    <div className='lg:flex lg:flex-col-reverse lg:pb-[30px]'>
                        <h3 className='lg:w-full lg:text-[24px] lg:font-bold text-[#284F43] lg:leading-6 lg:text-center'>賞味期限の確認を<br/>忘れてしまう</h3>
                        <figure className='lg:pb-[60px] lg:mx-auto'>
                            <img src="./slider-img1.png" alt="女性の写真" />
                        </figure>
                    </div>
                   
                    <p className='lg:w-[80%] lg:mx-auto lg:text-[16px] lg:font-light text-[#284F43] lg:pb-[60px]'>忘れがちな食材の賞味期限を<br/>近づいたら自動でお知らせ。</p>
                </div>
                
            </SwiperSlide>
            {/* 2つ目 */}
            <SwiperSlide>
                <div className='lg:w-[50%] lg:relative lg:pl-[20px] lg:pt-[120px]'>
                    <div className='lg:flex lg:flex-col-reverse lg:pb-[30px]'>
                        <h3 className='lg:w-full lg:text-[24px] lg:font-bold text-[#284F43] lg:leading-6 lg:text-center'>時間を割くのが<br/>もったいない</h3>
                        <figure className='lg:pb-[60px] lg:mx-auto'>
                            <img src="./slider-img2.png" alt="女性の写真" />
                        </figure>
                    </div>
                   
                    <p className='lg:w-[80%] lg:mx-auto lg:text-[16px] lg:font-light text-[#284F43] lg:pb-[60px]'>前回購入した商品がわかるからより少ない時間でらくらくチェック。</p>
                </div>
            </SwiperSlide>
            {/* 3つ目 */}
            <SwiperSlide>
                <div className='lg:w-[50%] lg:relative lg:pl-[20px] lg:pt-[120px]'>
                    <div className='lg:flex lg:flex-col-reverse lg:pb-[30px]'>
                        <h3 className='lg:w-full lg:text-[24px] lg:font-bold text-[#284F43] lg:leading-6 lg:text-center'>何を揃えたら良いのか<br/>わからない</h3>
                        <figure className='lg:pb-[60px] lg:mx-auto'>
                            <img src="./slider-img3.png" alt="男性の写真" />
                        </figure>
                    </div>
                   
                    <p className='lg:w-[80%] lg:mx-auto lg:text-[16px] font-light text-[#284F43] lg:pb-[60px]'>なにを交換しなくてはいけないかわからない方でも。おすすめの商品を安心管理。</p>
                </div>
            </SwiperSlide>

        </Swiper>

        </div>
    )
}

const Top = () => {
    const stepdata = {
        "id": [1, 2, 3, 4],
        "text": ["まずは会員登録", "カートに入れる", `スマホ1台!30秒でお申し込み`, "商品が届く"],
        "text2": [
            ["まずは会員登録"],
            ["カートに入れる"],
            ["スマホ1台!","30秒でお申し込み"],
            ["商品が届く"]
        ],
        "img": ["./step1.png", "./step2.png", "./step3.png", "./step4.png"]
    }
    return (
        <>
            <Header/>
            <main className='bg-[#F5F5F5]'>
                <Firstview />
                
                <div className='lg:w-full'>
                    {/* about */}
                    <section className='w-[90%] pt-40 lg:w-[80%] mx-auto'>
                        <h2 className=' text-center font-bold text-[28px] lg:text-[40px] text-[#284F43]'>
                            30秒で続けられる防災準備
                        </h2>

                        <div className='w-full lg:flex lg:justify-between pt-[60px] lg:pt-32 mx-auto text-center pb-60'>
                            <section className='pb-[120px] lg:pb-0' >
                                <h3 className='font-bold text-2xl leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br/>が、かなえてくれる
                                </h3>
                                <p className='text-base pt-8 leading-10 text-[#284F43]'>
                                    いざというときに備えたい、<br />
                                    重い腰があがらない、<br />
                                    何から始めていいかわからない、<br />
                                    そんな「めんどくさい」を解決してくれるのが<br />
                                    <span className='text-xl font-bold text-[#284F43]'>ぼうさいポッケ</span>なのです。
                                </p>
                            </section>
                            <section className='pb-[120px] lg:pb-0'>
                                <h3 className='font-bold text-2xl  leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br />が、かんたん管理
                                </h3>
                                <p className='text-base pt-8 leading-10 text-[#284F43]'>
                                    忘れがちな消費期限も、<br />
                                    通知でお知らせしてくれるから<br />
                                    うっかり忘れもなくて安心！<br />
                                </p>
                            </section>
                            <section className='pb-[120px] lg:pb-0'>
                                <h3 className='font-bold text-2xl leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br/>が、らくらくつづく
                                </h3>
                                <p className='text-base pt-8 leading-10 text-[#284F43]'>
                                    めんどうな防災管理が<br />
                                    スマホ一台<span>だから</span><br />
                                    継続して続けやすい、<br />
                                    それが <span className='text-xl font-bold text-[#284F43]'>ぼうさいポッケ</span>的な？<br/>
                                </p>
                            </section>
                        </div>
                    </section>


                    <div className=' w-full  bg-[#D6E7DA] relative'>
                        <div className='absolute top-[-15px] lg:top-[-45px]'>
                            <img src="./gizagiza.png" alt="境界線" className='w-full'/>
                        </div>
                        <section className='lg:w-[80%] lg:mx-auto pt-[50px] lg:pt-[180px]'>
                            <h2 className='text-center font-bold text-[28px] lg:text-left lg:text-[32px] text-[#284F43] lg:pl-[120px] lg:pb-[140px]'>
                                購入までのステップ
                            </h2>
                            <div className=' lg:flex lg:mx-auto'>
                                {
                                    stepdata.text.map((data, index) => (
                                        <div className='w-full relative mt-[60px] lg:mt-0'>
                                            <div className='text-center lg:w-[90%]'>
                                                <figure className=' lg:w-full'>
                                                    <img src={stepdata.img[index]} alt="stepの画像" className='w-[50%] lg:w-[80%] mx-auto' />
                                                </figure>
                                                <p className=' text-[20px] text-[#284F43] mt-[5%]'>Step{index + 1}</p>
                                                <p className=' text-[20px] font-bold text-[#284F43] mt-[5%]'>{data}</p>
                                            </div>
                                            {
                                                (()=>{
                                                    if(index<stepdata.id.length-1){
                                                        return(
                                                            <p className='rotate-90 lg:w-[5%] absolute bottom-0 lg:top-[33%] lg:right-0'><img src="./arow.png" alt="" /></p>
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

                <div className='relative w-full bg-[#D6E7DA] lg:pb-[500px] pt-[240px] lg:pt-[300px] lg:bg-bg-3 lg:bg-cover'>
                    <section className=' lg:w-[80%] lg:mx-auto lg:flex lg:items-center'>
                        <div className='lg:relative lg:w-[50%] lg:bg-bg-2 lg:bg-no-repeat lg:h-[600px] lg:bg-contain lg:flex lg:items-center '>
                            <h2 className='text-center text-[28px] lg:w-[80%] font-bold lg:text-[42px] lg:pl-[100px] text-[#284F43] lg:relative lg:z-10'>
                                こんな方に<br className=''/>おすすめ
                            </h2>
                        </div>

                        <Slider />
                    </section>

                </div>

                <div className='lg:relative lg:w-full bg-[#D6E7DA] lg:pb-[300px]'>
                    {/* <div className='absolute'>
                        <img src="./gizagiza2.png" alt="境界線" />
                    </div> */}
                    <section className=' lg:w-[80%] lg:mx-auto'>
                        <h2 className=' lg:font-bold lg:text-[32px] text-[#284F43] lg:pl-[20px] lg:pb-[30px]'>
                            よくあるご質問
                        </h2>
                        <Accordion
                            title= "注文してからどれくらいで届きますか？"
                            content="ご注文いただいてから、1〜3日程度でお届けいたします。（地域によって異なります）"
                        />
                        <Accordion
                            title="置き配はできますか？"
                            content="可能です。"
                        />
                        <Accordion
                            title="やめたい場合はどうしたらいいですか？"
                            content="お届け前週の火曜日19時30分までにご連絡をお願いいたします。
                            お届け実施週内でのキャンセルは原則的にお受けできません。ただし、急な入院などの特別な場合はご相談ください。"
                        />
                        <Accordion
                            title="申し込みはどこからすればいいですか？"
                            content="本ページから館員登録をしていただけます。"
                        />
                        <Accordion
                            title="手数料（配達料）はいくらですか？"
                            content="日本中どこでも360円です。"
                        />

                    </section>

                </div>

                <div className='lg:relative lg:w-full bg-[#F5F5F5] lg:pb-[300px] lg:pt-[200px]'>
                    <div className='lg:absolute lg:top-[-100px]'>
                            <img src="./gizagiza3.png" alt="境界線" />
                    </div>
                
                    <section className=' lg:w-[80%] lg:mx-auto'>
                        <h2 className=' lg:font-bold lg:text-[32px] text-[#284F43] lg:pl-[20px] lg:pb-[60px]'>
                            新規会員登録はこちら
                        </h2>
                        <div className=' lg:w-[80%] bg-[#E0EBE3] lg:mx-auto'>
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