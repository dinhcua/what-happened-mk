import React from 'react'
import './Footer.scss'
// import ic1 from '../../asset/footer-icon-1.png'
// import ic2 from '../../asset/footer-icon-2.png'
// import ic3 from '../../asset/footer-icon-3.png'
import ic3 from '../../asset/footer-icon-3.png'
import ic2 from '../../asset/footer-icon-2.png'
import ic1 from '../../asset/footer-icon-1.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="whp">
                    <div className="text-style-23">what happened</div>
                    <p className="text-style-8">[공지] 개인 정보 처리 방침 변경 사전 안내<br />
                        [공지] 29CM 강남 스토어 영업 종료<br />
                        [공지] 개인 정보 처리 방침 변경 사전 안내<br />
                        [공지] iOS 10 이하 버전 지원 중단 안내<br />
                        [공지] 개인 정보 처리 방침 변경 사전 안내</p>
                </div>
                <div className="footer-top-right">
                    <div className="about">
                        <div className="text-style-23">about us</div>
                        <p className="text-style-8">회사 소개<br />
                            인재 채용<br />
                            상시 할인 혜택</p>
                    </div>
                    <div className="order">
                        <div className="text-style-23">my order</div>
                        <p className="text-style-8">내 주문<br />
                            주문 배송<br />
                            취소 / 교환 / 반품 내역<br />
                            상품 리뷰 내역<br />
                            증빙 서류 발급</p>
                    </div>
                    <div className="account">
                        <div className="text-style-23">my account</div>
                        <p className="text-style-8">회원 정보 수정<br />
                            회원 등급<br />
                            마일리지 현황<br />
                            쿠폰</p>
                    </div>
                    <div className="help">
                        <div className="text-style-23">help</div>
                        <p className="text-style-8">1 : 1 상담 내역<br />
                            상품 Q & A 내역<br />
                            공지 사항<br />
                            자주하는 질문<br />
                            고객의 소리</p>
                    </div>
                </div>
            </div>


            <div className="line">

            </div>
            <div className="info">
                <div className="text text-style-8">
                    © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                </div>
                <div className="icon">
                    <img src={ic1} alt="icon" />
                    <img src={ic2} alt="icon" />
                    <img src={ic3} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer