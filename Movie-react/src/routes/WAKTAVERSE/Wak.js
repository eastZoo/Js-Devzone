import React from "react";
import styles from "./Wak.module.css";

function Wak() {

    return (
        <div id="%s" class="card">
            <div class="card__image-holder">
                <img class="card__image" src="%s" title="%s님의 방송" />
            </div>
            <div class="card-title">
            <a href="#" class="toggle-info btn">
                <span class="left"></span>
                <span class="right"></span>
            </a>
            <h2>
                %s
                <small>%s</small>
            </h2>
            </div>
            <div class="card-flap flap1">
                <div class="card-description">
                    <p>카테고리 : %s</p>
                    <p>시청자 : %d 명</p>
                    <p>업타임 : %s</p>
                    <p>시작시간 : %s</p>
                </div>
            <div class="card-flap flap2">
                <div class="card-actions">
                <a  OnClick="openInNewTab('https://twitch.tv/%s')" class="btn">%s님 트위치 보러가기</a>
        <br/>
        <br/>
        <a  OnClick="openInNewTab('%s')" class="btn">%s님 유튜브 보러가기</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wak;