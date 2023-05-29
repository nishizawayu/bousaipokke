import './App.css'

// ファーストビュー
const Firstview =()=>{
    return(
        <>
            <div className='w-full h-screen relative'>
                <div className='w-full h-[80vh] bg-firstview bg-contain bg-no-repeat absolute z-0'></div>
                <p className='w-[30%] m-cen pt-[5%] z-10 relative'><img src="./fv-text1.png" alt="スマホ一台で丸ごとOK" className="w-full"/></p>
                <div className='w-full h-screen relative z-[1]'>
                    <p className='w-[70%] absolute top-0 left-[15%]'><img src="./fv-text2.png" alt="防災" className="w-full"/></p>
                    <img src="./fv-woman.png" alt="女性の画像" className="w-[30%] relative z-10 m-cen top-0"/>
                    <p className='w-[60%] absolute top-[35%] left-[20%] z-20'><img src="./fv-text3.png" alt="ポッケ" className="w-full"/></p>   
                </div>     
            </div>
        </>
    )
}

const Top =()=>{
    const stepdata = {
        "id" : [1,2,3,4],
        "text" :["まずは会員登録","カートに入れる",`スマホ1台!30秒でお申し込み`,"商品が届く"],
        "img" : ["./step2.png","./step2.png","./step3.png","./step4.png"]
    }
    return(
        <>
            <main className='bg-[#F5F5F5]'>
                <Firstview/>
                <div className='w-full'>
                    {/* about */}
                    <section className='pt-40 w-[80%] m-cen'>
                        <h2 className=' font-bold text-[40px] text-[#284F43]'>
                            30秒で続けられる防災準備
                        </h2>

                        <div className='w-full lg:flex lg:justify-between pt-32 m-cen text-center pb-60'>
                            <section>
                                <h3 className='font-bold text-2xl leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br/>が、かなえてくれる
                                </h3>
                                <p className='text-base pt-8 leading-10'>
                                    いざというときに備えたい、<br/>
                                    重い腰があがらない、<br/>
                                    何から始めていいかわからない、<br/>
                                    そんな「めんどくさい」を解決してくれるのが<br/>
                                    <span className='text-xl font-bold text-[#284F43]'>ぼうさいポッケ</span>なのです。
                                </p>
                            </section>
                            <section>
                                <h3 className='font-bold text-2xl leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br/>が、かんたん管理
                                </h3>
                                <p className='text-base pt-8 leading-10'>
                                    忘れがちな消費期限も、<br/>
                                    通知でお知らせしてくれるから<br/>
                                    うっかり忘れもなくて安心！<br/>
                                </p>
                            </section>
                            <section>
                                <h3 className='font-bold text-2xl leading-7 text-[#284F43]'>
                                    <span className='font-bold text-[40px]'>ぼうさいポッケ</span><br/>が、らくらくつづく
                                </h3>
                                <p className='text-base pt-8 leading-10'>
                                    めんどうな防災管理が<br/>
                                    スマホ一台だから<br/>
                                    継続して続けやすい！<br/>
                                </p>
                            </section>
                        </div>
                    </section>

                
                <div className=' w-full  bg-[#D6E7DA] relative'>
                    <div className=' absolute top-[-45px]'>
                        <img src="./gizagiza.png" alt="" />
                    </div>
                    <section className='w-[80%] m-cen pt-[180px]'>
                        <h2 className=' font-bold text-[40px] text-[#284F43] pl-[60px] pb-[140px]'>
                             購入までのステップ
                        </h2>
                        <div className=' flex m-cen'>
                        {
                            stepdata.text.map((data,index)=>{
                                const imgurl = stepdata.img[index];
                                const view = <div className='text-center w-[25%]'>
                                                <figure className=' w-full'>
                                                    <img src={imgurl} alt="stepの画像" className='w-[80%] m-cen'/>
                                                </figure>
                                                <p className=' text-[32px] text-[#284F43]'>step{index+1}</p>
                                                <p className=' text-[32px] font-bold text-[#284F43]'>{data}</p>
                                            </div> ; 
                                return view
                            })
                        }
                        </div>
                                
                            
                    </section>
                    </div>
                </div>
            </main>
            
        </>
    )
}

export default Top