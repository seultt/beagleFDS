import React  from 'react';

export const IconLike = (props) => {
  const liked = props.liked
  let isLike
  liked ? (isLike='#0099ff'):(isLike='#b2b2b2') 
  return(
    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="18" width="18" viewBox="0 0 18 18" fill={isLike} xmlSpace="preserve"  version="1.1" id="Capa_1" enableBackground="new 0 0 18 18" className="darkLike">
      <g>
        <g>
          <path d="M 11.941 0.33 c -1.783 -0.825 -4.115 -0.049 -4.94 1.73 c -0.825 -1.779 -3.157 -2.556 -4.94 -1.73 C 0.162 1.211 -0.746 3.461 0.754 6.115 c 1.065 1.889 2.953 3.312 6.247 5.863 c 3.294 -2.551 5.182 -3.975 6.247 -5.863 C 14.748 3.461 13.84 1.211 11.941 0.33 Z" transform="translate(0 3)"/>
        </g>
      </g>
    </svg>
  )
}
export const IconTravel = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="21" viewBox="0 0 22 20" version="1.1" x="0" y="0" xmlSpace="preserve" enableBackground="new 0 0 22 20" fill="#b2b2b2">
        <path id="Forma_1" data-name="Forma 1" className="cls-1" d="M16.032,0.181A0.238,0.238,0,0,0,15.78.146L0.63,7a0.225,0.225,0,0,0,0,.41l4.288,2.05a0.238,0.238,0,0,0,.242-0.022L9.324,6.408,6.052,9.687a0.224,0.224,0,0,0-.065.176L6.312,14a0.229,0.229,0,0,0,.16.2,0.244,0.244,0,0,0,.073.011,0.236,0.236,0,0,0,.177-0.079L9,11.56l2.813,1.31a0.239,0.239,0,0,0,.194,0,0.229,0.229,0,0,0,.13-0.14L16.1,0.421A0.224,0.224,0,0,0,16.032.181Z" transform="translate(-0.5 3)"/>
      </svg>
    )
}
export const IconCalendar = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 14 14" version="1.1" x="0" y="0" xmlSpace="preserve" enableBackground="new 0 0 14 14" fill="#b2b2b2">
        <path id="Forma_1" data-name="Forma 1" className="cls-1" d="M2.575,2.631H2.6a0.483,0.483,0,0,0,.483-0.483V1.183A0.483,0.483,0,0,0,2.6.7H2.575a0.483,0.483,0,0,0-.483.483V2.148A0.483,0.483,0,0,0,2.575,2.631Zm4.989,0H7.591a0.483,0.483,0,0,0,.483-0.483V1.183A0.483,0.483,0,0,0,7.591.7H7.564a0.483,0.483,0,0,0-.483.483V2.148A0.483,0.483,0,0,0,7.564,2.631Zm1.448-.644H8.556V2.148a0.967,0.967,0,0,1-.966.966H7.564A0.967,0.967,0,0,1,6.6,2.148V1.987H3.567V2.148a0.967,0.967,0,0,1-.966.966H2.575a0.967,0.967,0,0,1-.966-0.966V1.987H1.287A1.288,1.288,0,0,0,0,3.275V9.712A1.288,1.288,0,0,0,1.287,11H9.012A1.288,1.288,0,0,0,10.3,9.712V3.275A1.288,1.288,0,0,0,9.012,1.987ZM9.656,9.712a0.644,0.644,0,0,1-.644.644H1.287A0.644,0.644,0,0,1,.644,9.712V4.562H9.656v5.15ZM2.575,5.381a0.791,0.791,0,1,1-.791.791A0.791,0.791,0,0,1,2.575,5.381Zm2.575,0a0.791,0.791,0,1,1-.791.791A0.791,0.791,0,0,1,5.15,5.381Zm2.575,0a0.791,0.791,0,1,1-.791.791A0.791,0.791,0,0,1,7.725,5.381ZM2.575,7.956a0.791,0.791,0,1,1-.791.791A0.791,0.791,0,0,1,2.575,7.956Zm2.575,0a0.791,0.791,0,1,1-.791.791A0.791,0.791,0,0,1,5.15,7.956Zm2.575,0a0.791,0.791,0,1,1-.791.791A0.791,0.791,0,0,1,7.725,7.956Z" transform="translate(0 3)"/>
      </svg>
    )
}
export const IconPoint = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="16" viewBox="0 0 97.713 97.713"  enableBackground="new 0 0 97.713 97.713" xmlSpace="preserve" transform="translate(0 3)">
        <g>
          <path d="M48.855,0C29.021,0,12.883,16.138,12.883,35.974c0,5.174,1.059,10.114,3.146,14.684   c8.994,19.681,26.238,40.46,31.31,46.359c0.38,0.441,0.934,0.695,1.517,0.695s1.137-0.254,1.517-0.695   c5.07-5.898,22.314-26.676,31.311-46.359c2.088-4.57,3.146-9.51,3.146-14.684C84.828,16.138,68.69,0,48.855,0z M48.855,54.659   c-10.303,0-18.686-8.383-18.686-18.686c0-10.304,8.383-18.687,18.686-18.687s18.686,8.383,18.686,18.687   C67.542,46.276,59.159,54.659,48.855,54.659z" fill="#646464"/>
        </g>
      </svg>
    )
}
export const IconKakao = () => {
    return(
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" viewBox="0 0 20 20" enableBackground= "new 0 0 2031.2 1874.4" xmlSpace="preserve"transform="translate(-80 0)" fill="#000" >
        <g>
          <polygon points="800.8,707.7 742.3,873.9 859.3,873.9 859.3,873.9 	"/>
          <path d="M1015.6,0L1015.6,0C454.7,0,0,358.5,0,800.8c0,285.9,190.1,536.8,476.1,678.5c-15.6,53.7-100,345.2-103.3,368.1
            c0,0-2,17.2,9.1,23.8c11.1,6.6,24.2,1.5,24.2,1.5c32-4.5,370.5-242.3,429.1-283.6c58.5,8.3,118.8,12.6,180.4,12.6
            c560.9,0,1015.6-358.5,1015.6-800.8C2031.2,358.5,1576.5,0,1015.6,0z M512.7,1024.4c0,30.9-26.3,56-58.6,56s-58.6-25.1-58.6-56
            V676.3h-91.4c-31.7,0-57.5-25.7-57.5-57.4s25.8-57.4,57.5-57.4h300c31.7,0,57.5,25.7,57.5,57.4s-25.8,57.4-57.5,57.4h-91.4V1024.4z
            M1005.1,1071.5c-11.7,5.3-24.4,8.1-37.2,8.1v0c-24.4,0-43.1-9.9-48.8-25.9l-29-76l-178.7,0l-29,76c-5.6,15.9-24.3,25.8-48.7,25.8
            c-12.9,0-25.6-2.7-37.2-8.1c-16.2-7.5-31.7-27.9-13.9-83.2l140.2-368.9c9.9-28.1,39.9-57,78-57.8c38.3,0.9,68.3,29.8,78.2,57.9
            L1019,988.2C1036.8,1043.6,1021.3,1064.1,1005.1,1071.5z M1301.3,1071.8h-188c-31,0-56.2-24.1-56.2-53.7V620.1
            c0-32.3,26.8-58.6,59.8-58.6s59.8,26.3,59.8,58.6v344.2h124.5c31,0,56.2,24.1,56.2,53.7S1332.2,1071.8,1301.3,1071.8z M1760,1027.7
            c-2.1,15.4-10.3,29.3-22.7,38.6c-10.1,7.7-22.5,11.9-35.2,11.8c-18.4,0.1-35.8-8.6-46.8-23.3l-137.4-182.1l-20.3,20.3v127.8
            c0,32.4-26.3,58.6-58.6,58.6v0c-32.3,0-58.6-26.3-58.6-58.6V620.1c0-32.3,26.3-58.6,58.6-58.6s58.6,26.3,58.6,58.6v125.9
            l163.5-163.5c8.4-8.4,20-13,32.5-13c14.6,0,29.3,6.3,40.3,17.3c10.3,10.3,16.4,23.4,17.2,37.1c0.8,13.8-3.8,26.5-12.9,35.7
            l-133.5,133.5l144.2,191.1C1758.1,996.6,1762.2,1012.3,1760,1027.7z" transform="scale(0.01)"/>
        </g>
      </svg>
    )
}
export const IconNaver = () => {
    return(
      <svg version="1.1" id="svg2" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" viewBox="0 0 501.4 442.9" enableBackground="new 0 0 501.4 442.9" xmlSpace="preserve" transform="translate(-80 0)" fill="#fff">

        <g id="layer1" transform="translate(-102.64931,-153.18816)">
          <path id="path2830" class="st0" d="M104.1,153.2l-1.4,441.4l173.6,0.7l0.7-178.6L265.5,361l164.3,233.6l174.3,1.4l-0.7-441.4
            l-174.3-0.7l3.6,182.1l11.4,65L276.9,153.9L104.1,153.2L104.1,153.2z"transform="scale(1)"/>
        </g>
      </svg>
    )
}
export const IconGoogle = () => {
    return(
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" transform="translate(-90 0)" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="20" xmlSpace="preserve">
        <path fill="#FBBB00" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
          c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
          C103.821,274.792,107.225,292.797,113.47,309.408z"/>
        <path fill="#518EF8" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
          c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
          c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"/>
        <path fill="#28B446" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
          c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
          c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"/>
        <path fill="#F14336" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
          c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
          C318.115,0,375.068,22.126,419.404,58.936z"/>
      </svg>
    )
}

export const IconFacebook = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="20" height="20" viewBox="0 0 96.124 96.123" enableBackground="new 0 0 96.124 96.123" transform="translate(-70 0)" >
        <g>
          <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" fill="#FFFFFF"/>
        </g>
      </svg>
    )
}
export const IconSetting = () => {
    return(
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve" fill="#949392" width="16">
        <g id="info">
        </g>
        <g id="icons">
          <path id="settings" className="st0" d="M22.9,14.4l-1.3-0.7c-1.4-0.8-1.4-2.7,0-3.5l1.3-0.7c1.1-0.6,1.4-1.8,0.7-2.7l-1.1-1.7
            c-0.6-1-1.9-1.3-2.9-0.7l-1.3,0.7c-1.4,0.8-3.2-0.2-3.2-1.7V2c0-1.1-1-2-2.1-2h-2.1C9.8,0,8.8,0.9,8.8,2v1.3C8.8,4.8,7,5.8,5.6,5
            L4.3,4.4C3.2,3.8,1.9,4.2,1.4,5.1L0.3,6.8c-0.5,1-0.2,2.2,0.7,2.8l1.3,0.7c1.4,0.7,1.4,2.7,0,3.4l-1.3,0.7C0,15-0.3,16.2,0.3,17.1
            l1.1,1.7c0.6,1,1.9,1.3,2.9,0.7l1.3-0.6c1.4-0.8,3.2,0.2,3.2,1.7V22c0,1.1,1,2,2.1,2h2.1c1.2,0,2.1-0.9,2.1-2v-1.3
            c0-1.5,1.8-2.5,3.2-1.7l1.3,0.7c1.1,0.6,2.4,0.2,2.9-0.7l1.1-1.7C24.2,16.2,23.9,15,22.9,14.4z M12,16c-2.4,0-4.3-1.8-4.3-4
            S9.6,8,12,8s4.3,1.8,4.3,4S14.4,16,12,16z"/>
        </g>
      </svg>
    )
}
export const BTNClose = () => {
    return(
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" width="15" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#949392">
        <g>
          <path className="st0" d="M41.1,32l21.1-21.1c2.5-2.5,2.5-6.6,0-9.1c-2.5-2.5-6.5-2.5-9.1,0L32,22.9L10.9,1.9c-2.5-2.5-6.5-2.5-9.1,0
            s-2.5,6.6,0,9.1L22.9,32L1.9,53.1c-2.5,2.5-2.5,6.6,0,9.1C3.1,63.4,4.8,64,6.4,64s3.3-0.6,4.5-1.9L32,41.1l21.1,21.1
            c1.2,1.2,2.9,1.9,4.5,1.9c1.6,0,3.3-0.6,4.5-1.9c2.5-2.5,2.5-6.6,0-9.1L41.1,32z"/>
        </g>
      </svg>

    )
}

export const Logo = () => {
    return(
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="78" viewBox="0 0 78 25" enableBackground="new 0 0 78 25" xmlSpace="preserve" fill="#0099FF">
        <g id="_.header_logo_Beagle" className="st0">
          <path className="st1" d="M0.6,1.7h6c2.3,0,4.1,0.3,5.2,1s1.7,1.8,1.7,3.2c0,1-0.2,1.8-0.7,2.5s-1.1,1.1-1.9,1.3v0.1
            c1.1,0.3,1.8,0.8,2.3,1.4s0.7,1.5,0.7,2.6c0,1.6-0.6,2.8-1.8,3.7s-2.8,1.3-4.8,1.3H0.6V1.7z M5.2,8.3h1.4c0.7,0,1.2-0.1,1.5-0.4
            c0.4-0.3,0.5-0.7,0.5-1.2c0-1-0.7-1.4-2.2-1.4H5.2V8.3z M5.2,11.7v3.6h1.6c1.4,0,2.2-0.6,2.2-1.8c0-0.6-0.2-1-0.6-1.3
            s-0.9-0.5-1.7-0.5H5.2z"/>
          <path className="st1" d="M22,19.1c-2.2,0-3.9-0.6-5.2-1.8s-1.8-2.8-1.8-5c0-2.2,0.6-4,1.7-5.2s2.8-1.8,4.9-1.8c2,0,3.5,0.5,4.6,1.6
            s1.6,2.5,1.6,4.5v2h-8.2c0,0.7,0.3,1.3,0.8,1.7s1.2,0.6,2.1,0.6c0.8,0,1.5-0.1,2.2-0.2s1.4-0.4,2.2-0.8v3.3
            c-0.7,0.4-1.5,0.6-2.2,0.8S23.1,19.1,22,19.1z M21.7,8.5c-0.5,0-1,0.2-1.4,0.5s-0.6,0.9-0.6,1.6h3.9c0-0.6-0.2-1.2-0.5-1.5
            S22.3,8.5,21.7,8.5z"/>
          <path className="st1" d="M38.2,18.8l-0.9-1.8h-0.1c-0.6,0.8-1.2,1.3-1.9,1.6s-1.5,0.4-2.5,0.4c-1.3,0-2.2-0.4-3-1.1s-1.1-1.8-1.1-3.2
            c0-1.4,0.5-2.5,1.5-3.2s2.4-1.1,4.3-1.2l2.2-0.1v-0.2c0-1.1-0.5-1.6-1.6-1.6c-1,0-2.2,0.3-3.7,1l-1.3-3c1.5-0.8,3.5-1.2,5.9-1.2
            c1.7,0,3,0.4,4,1.3s1.4,2,1.4,3.5v8.7H38.2z M34.8,15.8c0.6,0,1-0.2,1.4-0.5s0.6-0.8,0.6-1.4v-1l-1.1,0c-1.5,0.1-2.3,0.6-2.3,1.7
            C33.5,15.4,34,15.8,34.8,15.8z"/>
          <path className="st1" d="M56.2,5.6v2.2l-1.8,0.7c0.2,0.5,0.4,1,0.4,1.6c0,1.4-0.5,2.5-1.5,3.3c-1,0.8-2.5,1.2-4.5,1.2
            c-0.5,0-0.9,0-1.2-0.1c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.2,0.2,0.4,0.6,0.5s0.8,0.2,1.4,0.2h2.2c3,0,4.5,1.3,4.5,3.8
            c0,1.6-0.7,2.9-2.1,3.8s-3.3,1.3-5.8,1.3c-1.9,0-3.3-0.3-4.4-0.9s-1.5-1.5-1.5-2.7c0-1.6,1-2.6,3-3.1c-0.4-0.2-0.8-0.4-1.1-0.8
            s-0.5-0.8-0.5-1.1c0-0.4,0.1-0.8,0.3-1.1s0.7-0.7,1.4-1.1c-0.7-0.3-1.2-0.8-1.6-1.4s-0.6-1.4-0.6-2.4c0-1.4,0.5-2.6,1.5-3.4
            s2.4-1.2,4.2-1.2c0.2,0,0.7,0,1.3,0.1s1,0.1,1.3,0.2H56.2z M46.2,20.5c0,0.4,0.2,0.7,0.6,0.9s0.9,0.3,1.6,0.3c1.1,0,2-0.1,2.7-0.4
            s1-0.6,1-1.1c0-0.4-0.2-0.6-0.6-0.7s-1-0.2-1.7-0.2h-1.8c-0.5,0-0.9,0.1-1.2,0.3S46.2,20.2,46.2,20.5z M47.6,9.9c0,1.4,0.5,2,1.4,2
            c0.4,0,0.8-0.2,1-0.5s0.4-0.8,0.4-1.5c0-1.4-0.5-2.1-1.4-2.1C48.1,7.9,47.6,8.6,47.6,9.9z"/>
          <path className="st1" d="M61.9,18.8h-4.6V0.6h4.6V18.8z"/>
          <path className="st1" d="M70.6,19.1c-2.2,0-3.9-0.6-5.2-1.8s-1.8-2.8-1.8-5c0-2.2,0.6-4,1.7-5.2s2.8-1.8,4.9-1.8c2,0,3.5,0.5,4.6,1.6
            s1.6,2.5,1.6,4.5v2h-8.2c0,0.7,0.3,1.3,0.8,1.7s1.2,0.6,2.1,0.6c0.8,0,1.5-0.1,2.2-0.2s1.4-0.4,2.2-0.8v3.3
            c-0.7,0.4-1.5,0.6-2.2,0.8S71.7,19.1,70.6,19.1z M70.4,8.5c-0.5,0-1,0.2-1.4,0.5s-0.6,0.9-0.6,1.6h3.9c0-0.6-0.2-1.2-0.5-1.5
            S71,8.5,70.4,8.5z"/>
        </g>
      </svg>
    )
}