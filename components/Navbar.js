import Link from 'next/link'
import styled from 'styled-components'

const Div = styled.div`
    font-size: 100px;
    margin-bottom: 40px;
    `
const Ul = styled.ul`
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: #d7e8ff;
    list-style-type: none;
    `
const Li = styled.li`
    margin: 25px;
    `
function Navbar() {
    return (
        <div>
            <Div>
                <Ul>
                    <Li><Link href='/about'><a><i className="fa fa-info-circle"></i></a></Link></Li>
                    <Li><Link href='/'><a><i className="fa fa-search"></i></a></Link></Li>
                    <Li><Link href='/history'><a><i className="fa fa-history"></i></a></Link></Li>
                </Ul>
            </Div>
        </div>
    )
}

export default Navbar

