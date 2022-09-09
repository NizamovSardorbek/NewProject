import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavRouter from "./NavRouter";
import { RouterData } from "./RouterData";

const RouterDom = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<NavRouter />}>
            {RouterData.map(({path, Component})=>(
                <Route path={path} element={Component}/>
            ))}
            <Route path="/home" element={<span>Home page </span>} />
            <Route path="/about" element={<span>About page </span>} />
            <Route path="/contact" element={<span>Contact page</span>} />
          </Route>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/*" element={<span>404 page</span>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouterDom;

// 1 pasda react router domni install qilib olamz  npm install react-router-dom
// 2 tepada  chaqiramz birinchi kerak boladgn narsa BrowserRouter bu hammasini orab turadi
// 3 bir turdagilarni misol uchun Navbarni saqlash uchun Footer saqlash uchun hammasiniu Routesga orab qoyiladi
// 4 endi har bitta pageni bitta Routega solib qoyamz
// 5 Routeni ichiga path='/home' beramz yani home deganmda home degan pagega otsn
// 6 Routeni ichiga yana element ={<span>home</span>} yani yonaltramz bu component berb yuboramz
// 7 endi necta page bolsa shuncha  NavLink ochamz yani tepada biz pagelarga yonaltirishmz uchun
// 8 NavLink ichiga to='/home' yani pasda pathga nma bergan bolsak shu nomni toni iciga beramz
// 9 agar tepada biz izlagan narsa yoq bolsa misol ucun home1 deb yozsamm bzga 404 pageni chiqarshmz uchun pathga * berb qoyamz va hammasini orab qoyga Routedan bitta pasga olib tushb qoyamz
// 10 endi navbar bizda doimm  kurinb turishi uchun bitta Routega hamma malumtmzni solamz icidagi elementiga NAvlinkni berb qoyamz
// 11 va teapda  Outlet beramz yani hec qaysinisiga turi kelmasa pasda alohida yozganmz chiqadi yani navbar yoqoladi
// 12 biz hec qandey yonalish bermasak ham yani default xolatini bersh uchun pasda Routeni ichida pathga "/" elementiga <Navigate to="home"/> to qilib  yonalishni beramz
// 13
