import React, { useState } from "react";

const ManyInput = () => {
  const [name, setName] = useState("");
  const [hurigana, setHurigana] = useState("");
  const [post1, setPost1] = useState("");
  const [post2, setPost2] = useState("");
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [email, setEmail] = useState("");

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
    setEmail(e.target.value);
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
                type="number"
                placeholder="000"
                className="w-[25%] border border-[#000] rounded"
            />-
            <input
                value={tel2}
                onChange={handleTel2}
                type="number"
                placeholder="0000"
                className="w-[25%] border border-[#000] rounded"
            />-
            <input
                value={tel3}
                onChange={handleTel3}
                type="number"
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
                type="number"
                placeholder="000"
                className="w-[10%] border border-[#000] rounded"
            />-
            <input
                value={post2}
                onChange={handlePost2}
                type="number"
                placeholder="0000"
                className="w-[25%] border border-[#000] rounded"
            />
          </p>
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
        <p className="w-[30%] mx-auto"><input type="button" value="登録する" className="w-full pt-[6px] pb-[6px] mx-auto rounded bg-[#FFB438] text-base font-bold text-[#fff]"/></p>
      </form>
    </div>
  );
};

export default ManyInput;