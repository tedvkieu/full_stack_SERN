import React, { Component } from 'react';
import './HomeHeader.scss';

const HomeHeader = () => {
    return (
        <div className="home-header-container">
            <div className="home-header-content">
                <div className="left-content">
                    <i className="fas fa-bars"></i>
                    <div className="header-logo"></div>
                </div>
                <div className="center-content">
                    <div className="child-content">
                        <div>
                            <b>Chuyen Khoa</b>
                        </div>
                        <div className="subs-title">
                            Tìm bác sĩ theo chuyên khoa
                        </div>
                    </div>
                    <div className="child-content">
                        <div>
                            <b>Cơ sở y tế</b>
                        </div>
                        <div className="subs-title">
                            Chọn bệnh viện phòng khám
                        </div>
                    </div>
                    <div className="child-content">
                        <div>
                            <b>Bác sĩ</b>
                        </div>
                        <div className="subs-title">Chọn Bác sĩ giỏi</div>
                    </div>
                    <div className="child-content">
                        <div>
                            <b>Gói Khám</b>
                        </div>
                        <div className="subs-title">
                            Khám sức khỏe tổng quát
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <div className="support">
                        <i class="fas fa-question-circle">Ho tro</i>
                        <div className="flag">VN</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
