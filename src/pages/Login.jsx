import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
    const [userTab, setUserTab] = useState('login');
    

    return(
        <div className="login-wrap">
            <div className="login-inner">
                <div className="title-box">
                    <h3>Ani<span>Trace</span></h3>
                    <p>
                        당신의 애니 라이프를,
                        하나의 타임라인으로
                    </p>
                    <span>보고, 기록하고, 나만의 취향을 발견하세요.</span>
                </div>
                <div className="input-box">
                    <div className="login-tab">
                        <ul className="login-type">
                            <li className={userTab == 'login' ? 'active' : null} onClick={()=>{ setUserTab('login')}}>로그인</li>
                            <li className={userTab == 'join' ? 'active' : null} onClick={() =>{ setUserTab('join') }}>회원가입</li>
                        </ul>
                        <form className={"login-tab-box" + (userTab == 'login' ? ' active ' : '')}>
                            <input type="text" placeholder="이메일을 입력해주세요" />
                            <input type="password" placeholder="비밀번호를 입력해주세요" />
                            <button type="submit">로그인</button>
                            <div className="maintain-label">
                                <div className="maintain-left">
                                    <input type="checkbox" name="maintain" id="login-maintain" />
                                    <label htmlFor="login-maintain">로그인 상태 유지</label>
                                </div>
                                <Link to='/'>비밀번호 찾기</Link>
                            </div>
                        </form>
                        <form className={"join-tab-box" + (userTab == 'join' ? ' active ' : '')}>
                            <div className="email-check-box">
                                <input type="text" placeholder='이메일을 입력해주세요'/>
                                <button>중복체크</button>
                            </div>
                            <input type="password" placeholder='비밀번호를 입력해주세요'/>
                            <input type="password" placeholder='비밀번호를 다시한번 입력해주세요'/>
                            <button>회원가입</button>
                        </form>
                    </div>
                    <div className="join-tab">
                        <form action="">
                            <div className="join-id-cheeck">
                                <input type="text" /> 
                                <button type="submit">중복확인</button>
                            </div>
                            <input type="text" /> 
                            <input type="password" />
                            <button type="submit">회원가입 하기</button>
                        </form>
                    </div>
                    <div className="easy-login">
                        <span>간편 로그인</span>
                        <button>Google로 로그인</button>
                        <button>카카오로 로그인</button>
                    </div>
                </div>
            </div>
        </div>
    )
}