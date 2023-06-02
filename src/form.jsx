import React, { useState } from "react";

const ManyInput = () => {
  const [name, setName] = useState("");
  const [hurigana, setHurigana] = useState("");
  const [post1, setPost1] = useState("");
  const [post2, setPost2] = useState("");
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [sityou, setSityou] = useState("");
  const [banti, setBanti] = useState("");
  const [building, setBuilding] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlehurigana = (e) => {
   setHurigana(e.target.value);
  };
  const handlePost1 = (e) => {
    setPost1(e.target.value);
  };
  const handlePost2 = (e) => {
    setPost2(e.target.value);
  };
  const handleTel1 = (e) => {
    setTel1(e.target.value);
  };
  const handleTel2 = (e) => {
    setTel2(e.target.value);
  };
  const handleTel3 = (e) => {
    setTel3(e.target.value);
  };
  const handleEmail = (e) => {
    setSityou(e.target.value);
  };
  const handleBanti = (e) => {
    setBanti(e.target.value);
  };
  const handleBuilding = (e) => {
    setBuilding(e.target.value);
  };

  const handleSityou = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };


  return (
    <div className=" w-[70%] mx-auto pt-[60px] pb-[60px]">
      <form>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[15%] text-[#284F43] font-bold">お名前</p>  
          <input
            value={name}
            onChange={handleName}
            type="text"
            placeholder="防災 太郎"
            className="w-[80%] border border-[#000] rounded"
          />
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[15%] text-[#284F43] font-bold">ふりがな</p>  
          <input
            value={hurigana}
            onChange={handlehurigana}
            type="text"
            placeholder="ぼうさい たろう"
            className="w-[80%] border border-[#000] rounded"
          />
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[15%] text-[#284F43] font-bold">電話</p>  
          <p className=" w-[80%]">
            <input
                value={tel1}
                onChange={handleTel1}
                type="text"
                placeholder="000"
                className="w-[25%] border border-[#000] rounded"
            />-
            <input
                value={tel2}
                onChange={handleTel2}
                type="text"
                placeholder="0000"
                className="w-[25%] border border-[#000] rounded"
            />-
            <input
                value={tel3}
                onChange={handleTel3}
                type="text"
                placeholder="000"
                className="w-[25%] border border-[#000] rounded"
            />
          </p>
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[15%] text-[#284F43] font-bold">郵便番号</p>  
          <p className=" w-[80%]">
            <input
                value={post1}
                onChange={handlePost1}
                type="text"
                placeholder="000"
                className="w-[10%] border border-[#000] rounded"
            />-
            <input
                value={post2}
                onChange={handlePost2}
                type="text"
                placeholder="0000"
                className="w-[25%] border border-[#000] rounded"
            />
          </p>
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[15%] text-[#284F43] font-bold">都道府県</p>
          <p className="w-[80%]">
            <select name="nihon" className="w-[25%] border border-[#000] rounded">
                <optgroup label="北海道">
                    <option value="0">北海道</option>
                </optgroup>
                <optgroup label="東北地方">
                    <option value="1">青森県</option>
                    <option value="2">秋田県</option>
                    <option value="3">岩手県</option>
                    <option value="4">山形県</option>
                    <option value="5">宮城県</option>
                    <option value="6">福島県</option>
                </optgroup>
                <optgroup label="関東地方">
                    <option value="7">栃木県</option>
                    <option value="8">茨城道</option>
                    <option value="9">群馬県</option>
                    <option value="10">埼玉県</option>
                    <option value="11">東京都</option>
                    <option value="12">千葉県</option>
                    <option value="13">神奈川県</option>
                </optgroup>
                <optgroup label="中部地方">
                    <option value="14">新潟県</option>
                    <option value="15">長野県</option>
                    <option value="16">山梨県</option>
                    <option value="17">静岡県</option>
                    <option value="18">岐阜県</option>
                    <option value="19">富山県</option>
                    <option value="20">石川県</option>
                    <option value="21">福井県</option>
                    <option value="22">愛知県</option>
                </optgroup>
                <optgroup label="近畿地方">
                    <option value="23">奈良県</option>
                    <option value="24">三重県</option>
                    <option value="25">滋賀県</option>
                    <option value="26">京都府</option>
                    <option value="27">大阪府</option>
                    <option value="28">兵庫県</option>
                    <option value="29">和歌山県</option>
                </optgroup>
                <optgroup label="中国地方">
                    <option value="30">鳥取県</option>
                    <option value="31">島根県</option>
                    <option value="32">岡山県</option>
                    <option value="33">広島県</option>
                    <option value="34">山口県</option>
                </optgroup>
                <optgroup label="四国地方">
                    <option value="35">徳島県</option>
                    <option value="36">愛媛県</option>
                    <option value="37">香川県</option>
                    <option value="38">高知県</option>
                </optgroup>
                <optgroup label="九州・沖縄地方">
                    <option value="39">福岡県</option>
                    <option value="40">佐賀県</option>
                    <option value="41">長崎県</option>
                    <option value="42">熊本県</option>
                    <option value="43">大分県</option>
                    <option value="44">宮崎県</option>
                    <option value="45">鹿児島県</option>
                    <option value="46">沖縄県</option>
                </optgroup>
            </select>
          </p>
          
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[15%] text-[#284F43] font-bold">市町村</p>  
          <input
            value={sityou}
            onChange={handleSityou}
            type="text"
            placeholder="新宿区"
            className="w-[80%] border border-[#000] rounded"
          />
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[15%] text-[#284F43] font-bold">番地</p>  
          <input
            value={banti}
            onChange={handleBanti}
            type="text"
            placeholder="0-0-0"
            className="w-[80%] border border-[#000] rounded"
          />
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[16%] text-[#284F43] font-bold">ビル・建物</p>  
          <input
            value={building}
            onChange={handleBuilding}
            type="text"
            placeholder="ミワーズデザイナーハウス"
            className="w-[80%] border border-[#000] rounded"
          />
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[15%] text-[#284F43] font-bold">Eメール</p>  
          <input
            value={email}
            onChange={handleEmail}
            type="text"
            placeholder="denshitarou@gmail.com"
            className="w-[80%] border border-[#000] rounded"
          />
        </div>
        <div className="flex w-full pb-[30px] justify-between">
          <p className="w-[16%] text-[#284F43] font-bold">パスワード</p>  
          <input
            value={pass}
            onChange={handlePass}
            type="password"
            placeholder=""
            className="w-[80%] border border-[#000] rounded"
          />
        </div>
        <p className="w-[20%] mx-auto"><input type="button" value="登録する" className="w-full pt-[6px] pb-[6px] mx-auto rounded bg-[#FFB438] text-base font-bold text-[#fff]"/></p>
      </form>
    </div>
  );
};

export default ManyInput;