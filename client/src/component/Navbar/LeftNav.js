import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Table } from 'antd';
import FooterComponent from '../Footer/Footer';
import Site from '../Site/Site';
import logo_small from '../../Images/logo_small.png'
import logo_large from '../../Images/logo_large.png'
import NabbarMenu from '../NavbarMenu/NavbarMenu';
import TableList from '../List/TableList';
import TableDetail from '../Detail/TableDetail';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function LeftNav() {
    const [Collapesd, setCollapesd] = useState(true);
    const [GridDisplay, setGridDisplay] = useState(false)
    const [DetailDisplay, setDetailDisplay] = useState(false);
    const [DetailItem, setDetailItem] = useState({});
    const [Type, setType] = useState("");
    
    const onCollapse = (collapse) =>{//사이드바 접고 펼치는 함수
        setCollapesd(collapse)
    }
    const onSelectMenu =(type)=>{
        setGridDisplay(!GridDisplay)
        setDetailDisplay(false);
        setType(type);
        //테이블 데이터 소스 바꿔줄것
    }
    const onDetailMenu =(item)=>{
        setGridDisplay(false);
        setDetailDisplay(true)
        setDetailItem(item);
        console.log(item);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={Collapesd} onCollapse={onCollapse}>
            {/* <div className="logo" >
                <img src={Collapesd ? logo_small : logo_large} alt="logo"
                    style={{
                        width:'100%',
                        maxHeight:'70px',
                        padding: 10
                    }}
                />
            </div> */}
        <NabbarMenu menuSelect={onSelectMenu}/>
        
        </Sider>
        {
            GridDisplay && <div style={{minWidth:"400px", maxHeight:"100vh", overflowY:"auto"}}><TableList type={Type} detailDisplay={onDetailMenu} listHide={setGridDisplay}/></div>
        }
        {
            DetailDisplay && <div style={{minWidth:"400px", maxHeight:"100vh", overflowY:"auto"}}><TableDetail type={Type} detailItem={DetailItem} listHide={setDetailDisplay}/></div>
        }
        <Layout className="site-layout">
            <Site/>
            {/* <FooterComponent/> */}
        </Layout>
      </Layout>
    )
}

export default LeftNav
