import { Component } from '@angular/core';


@Component({
  selector: 'hairs',
  templateUrl: './hairs.component.html',
  styleUrls: ['../leftPadding.css', '../button_style_down.css', '../avatarOptions.css']
})
export class HairsComponent {
  hairColor : string = "black";
  longHair : string = `<svg id="hairBack4" class="hairBack" width="105px" height="216px" viewBox="466.22900390625 1460.4615478515625 216.23077392578125 428.5384521484375" xmlns="http://www.w3.org/2000/svg"><path class="hairBack" id="path2232" [style.fill]="hairColor" style="fill-opacity: 1; fill-rule: nonzero; stroke: none;" d="M 643.942 1561.978 C 643.942 1504.013 604.159 1457 555.084 1457 C 506.014 1457 466.229 1504.013 466.229 1561.978 C 466.229 1581.541 470.769 1599.856 478.65 1615.519 L 521.552 1615.519 C 526.227 1610.992 531.642 1607.454 537.925 1605.191 C 537.482 1603.994 537.229 1602.719 537.229 1601.419 L 537.232 1599.597 C 534.415 1598.295 531.726 1596.942 529.037 1595.772 C 521.383 1592.467 509.608 1593.666 495.775 1574.725 C 491.044 1568.272 488.558 1559.973 487.321 1551.857 C 479.294 1554.432 478.948 1543.609 477.526 1538.38 C 476.05 1532.968 472.127 1528.051 476.445 1522.458 C 479.014 1519.128 482.86 1519.44 485.565 1520.247 C 485.869 1531.121 486.341 1547.851 486.341 1547.851 L 486.703 1546.809 L 497.949 1513.897 L 611.203 1513.897 L 622.808 1547.851 C 622.808 1547.851 623.127 1536.792 623.405 1526.802 C 623.446 1525.475 623.478 1524.149 623.514 1522.873 C 626.21 1521.938 630.538 1521.208 633.335 1524.852 C 637.658 1530.471 633.73 1535.362 632.256 1540.774 C 630.82 1546.056 630.482 1556.955 622.323 1554.224 C 620.985 1561.56 618.54 1568.898 614.269 1574.725 C 600.434 1593.666 588.656 1592.467 581.005 1595.772 C 578.309 1596.942 575.62 1598.322 572.795 1599.624 L 572.787 1601.419 C 572.787 1602.849 572.502 1604.202 571.985 1605.502 C 577.65 1607.766 582.608 1611.2 586.969 1615.519 L 631.518 1615.519 C 639.398 1599.856 643.942 1581.541 643.942 1561.978"/><path class="hairBack" d="M 468.758 1661.353 C 465.802 1677.538 469.933 1683.047 471.144 1688.662 C 474.903 1706.076 484.299 1703.813 481.156 1722.024 C 477.014 1746.027 467.094 1766.966 469.632 1790.493 C 470.069 1794.552 477.257 1813.651 478.865 1817.376 C 480.207 1820.485 483.164 1823.216 484.103 1826.478 C 484.571 1828.109 483.336 1833.118 488.245 1838.24 C 498.034 1848.456 506.978 1858.039 516.408 1868.965 C 521.151 1874.461 541.835 1872.428 548.711 1874.021 C 552.769 1874.964 574.635 1879.485 570.538 1878.068 C 562.846 1875.406 556.496 1870.929 553.951 1868.965 C 546.143 1862.934 536.393 1847.447 532.995 1837.607 C 532.557 1836.338 538.937 1845.07 543.25 1850.287 C 544.548 1851.858 538.546 1836.36 539.98 1837.607 C 550.252 1846.532 559.851 1842.245 571.411 1846.71 C 572.64 1847.182 577.747 1848.958 579.271 1850.757 C 598.287 1873.229 566.609 1836.593 565.3 1833.56 C 558.34 1817.43 553.951 1802.173 553.951 1781.974 C 553.951 1777.927 553.951 1773.88 553.951 1769.833 C 553.951 1767.782 551.306 1763.766 553.078 1763.766 C 559.494 1763.766 561.83 1772.95 565.685 1778.654 C 572.236 1788.353 584.83 1794.695 593.238 1801.191 C 598.422 1805.196 611.473 1845.226 653.739 1848.36 C 659.867 1848.815 612.554 1814.944 614.61 1815.236 C 669.445 1823.08 669.304 1891.86 669.304 1891.86 C 669.304 1891.86 680.517 1804.028 669.304 1788.768 C 663.965 1781.504 673.869 1759.726 672.584 1750.784 C 669.057 1726.263 660.143 1741.859 657.508 1717.438 C 655.702 1700.694 674.822 1694.406 668.255 1674.911 C 658.476 1645.881 671.657 1637.565 672.214 1611.234 C 672.637 1591.195 667.87 1587.809 667.734 1587.472 C 606.7 1436.219 631.634 1573.261 632 1571.04 C 643.724 1500.063 614.959 1498.848 605.436 1503.261 C 599.554 1505.987 615.915 1501.616 611.933 1506.229 C 610.959 1507.357 596.603 1497.06 595.073 1497.06 C 586.293 1497.06 585.893 1500.236 577.028 1496.812 C 573.276 1495.363 547.52 1516.52 545.25 1513.893 C 544.609 1513.148 501.402 1505 500.441 1504.723 C 493.592 1502.739 472.268 1517.2 472.268 1528.316" [style.fill]="hairColor" style="stroke: none; stroke-opacity: 0;"/><path class="hairStreaks" d="M 578.256 1625.803 C 587.262 1634.81 588.215 1663.961 590.404 1677.093 C 592.433 1689.27 600.208 1702.189 605.251 1713.535 C 610.054 1724.344 612.746 1736.589 619.423 1746.604 C 625.532 1755.768 628.276 1766.929 635.62 1774.273 C 636.68 1775.334 641.018 1783.046 641.018 1783.046 C 641.018 1783.046 638.641 1770.193 637.644 1768.199 C 630.164 1753.239 625.953 1742.128 621.447 1726.358 C 616.845 1710.249 609.812 1695.063 608.625 1678.442 C 608.085 1670.89 608.722 1663.004 609.3 1655.497 C 610.883 1634.917 608.52 1630.137 593.103 1622.429 C 588.199 1619.977 587.921 1617.247 584.33 1613.656 C 582.052 1611.378 572.518 1610.279 569.483 1604.207 C 567.546 1600.333 567.435 1596.038 566.109 1592.06 C 565.539 1590.353 566.109 1584.861 566.109 1586.661 C 566.109 1592.86 565.446 1601.188 568.808 1606.232 C 572.108 1611.182 578.931 1619.485 578.931 1624.453" style="stroke: none;" [style.fill]="hairColor/><path class="hairStreaks" d="M 582.98 1573.839 C 582.98 1571.407 583.942 1581.077 582.98 1583.962 C 579.598 1594.11 580.81 1600.863 586.355 1608.257 C 588.667 1611.339 591.612 1616.621 595.128 1618.38 C 601.334 1621.483 613.624 1620.955 617.398 1628.503 C 624.514 1642.734 614.768 1659.146 618.748 1675.068 C 619.398 1677.668 622.18 1679.965 622.797 1681.817 C 623.639 1684.343 621.823 1688.941 623.472 1690.59 C 623.647 1690.765 627.521 1693.29 627.521 1693.29 C 627.521 1693.29 626.846 1688.043 626.846 1687.216 C 626.846 1679.798 623.892 1669.76 626.172 1662.921 C 629.632 1652.539 630.889 1644.737 632.92 1632.552 C 633.118 1631.366 635.829 1623.988 634.27 1622.429 C 632.942 1621.101 633.494 1616.255 632.245 1615.005 C 627.982 1610.741 622.981 1600.588 616.723 1597.459 C 613.374 1595.785 608.326 1595.135 605.926 1592.735 C 604.268 1591.077 598.463 1592.696 596.478 1590.71 C 589.831 1584.063 588.006 1576.839 581.631 1570.464" style="stroke: none; fill: rgb(92, 39, 144);"/><path class="hairStreaks" d="M 644.393 1627.828 C 644.393 1652.256 628.04 1677.301 636.295 1702.063 C 638.31 1708.109 640.034 1714.74 641.019 1721.634 C 643.028 1735.7 645.88 1742.154 650.467 1751.328 C 651.706 1753.807 650.194 1758.479 651.816 1760.101 C 652.325 1760.609 652.576 1770.139 651.816 1770.899 C 650.927 1771.789 652.328 1769.294 653.166 1768.874 C 655.425 1767.745 656.009 1765.889 657.215 1763.475 C 658.544 1760.819 656.54 1746.897 656.54 1743.904 C 656.54 1742.87 657.222 1738.512 656.54 1737.831 C 654.083 1735.373 649.269 1732.062 647.767 1729.057 C 642.669 1718.86 645.679 1706.793 649.117 1697.339 C 651.445 1690.938 652.736 1691.02 655.866 1687.891 C 656.609 1687.147 653.849 1682.808 654.516 1681.142 C 655.219 1679.383 658.055 1676.253 659.24 1675.068 C 659.921 1674.387 660.967 1675.743 660.59 1675.743 C 656.485 1675.743 646.773 1660.861 649.792 1654.822 C 653.47 1647.466 656.681 1634.697 659.915 1625.803 C 660.43 1624.386 663.112 1618.025 662.614 1617.03 C 662.003 1615.808 660.914 1612.63 659.915 1611.631 C 656.341 1608.058 650.671 1619.934 647.767 1617.03 C 646.674 1615.937 635.68 1602.798 634.945 1603.533 C 633.668 1604.809 637.483 1607.421 637.644 1607.582 C 638.541 1608.478 639.036 1612.391 639.669 1613.656 C 641.978 1618.275 640.045 1625.88 642.368 1630.527 C 642.653 1631.096 643.082 1629.177 643.718 1629.177" style="stroke: none;" [style.fill]="hairColor"/></svg>`;
  insertMan() {
    var man = document.getElementById("manly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = man;
    document.getElementById("choices").innerHTML = '<mouths></mouths>';
  }
  buttonHairRemove() {
    var elem = document.querySelector("#relativeContainer .hair");
    if(elem !== null){
      elem.parentNode.removeChild(elem);
    }
    elem = document.querySelector("#relativeContainer .hairBack");
    if(elem !== null){
      elem.parentNode.removeChild(elem);
    }
  }
  buttonHair1(){
    var hair = document.getElementById("hair1").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair1").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -34px; left: -8.2px; margin-top: 0;"); }
  }
  buttonHair2(){
    var hair = document.getElementById("hair2").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair2").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -12px; left: -24.8; margin-top: 0;"); }
  }
  buttonHair3(){
    var hair = document.getElementById("hair3").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair3").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -4.5px; left: -4.3px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair4(){
    var hair = document.getElementById("hair4").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair4").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -2.7px; left: -3px; margin-top: 0; z-index: 4;");
      //var elementColorNode = document.querySelector("#relativeContainer path") as HTMLElement;
      //var originalHairColor = elementColorNode.style.fill;
      //relativeContainer.innerHTML += this.longHair;
      elemNew = document.querySelector("#relativeContainer .hairBack");
      if(elemNew !== null ) {
        elemNew.setAttribute("style", "position: absolute; top: -2px; left: -3px; z-index: -4; display: inline;");
      }
    }
  }
  buttonHair5(){
    var hair = document.getElementById("hair5").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair5").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -28px; left: -5px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair6(){
    var hair = document.getElementById("hair6").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair6").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -4px; left: -5px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair7(){
    var hair = document.getElementById("hair7").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair7").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: 0; left: -7px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair8(){
    var hair = document.getElementById("hair8").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair8").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -2px; left: 7.5px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair9(){
    var hair = document.getElementById("hair9").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair9").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -37px; left: 24px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair10(){
    var hair = document.getElementById("hair10").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair10").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -1px; left: 6px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair11(){
    var hair = document.getElementById("hair11").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair11").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -8px; left: -2px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair12(){
    var hair = document.getElementById("hair12").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair12").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { 
      elemNew.setAttribute("style", "position: absolute; top: -7.2px; left: 7px; margin-top: 0; z-index: 4;"); 
      elemNew = document.querySelector("#relativeContainer .hairBack");
      if(elemNew !== null ) {
        elemNew.setAttribute("style", "position: absolute; top: -6.8px; left: 0; z-index: -4; display: inline;");
      }
    }
  }
  buttonHair13(){
    var hair = document.getElementById("hair13").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair13").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -13px; left: -29px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair14(){
    var hair = document.getElementById("hair14").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair14").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -24px; left: 1px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair15(){
    var hair = document.getElementById("hair15").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair15").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -16px; left: -3px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair16(){
    var hair = document.getElementById("hair16").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair16").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -37px; left: -1px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair17(){
    var hair = document.getElementById("hair17").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair17").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -27px; left: -1px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair18(){
    var hair = document.getElementById("hair18").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair18").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -11px; left: 8px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair19(){
    var hair = document.getElementById("hair19").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair19").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: -15px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair20(){
    var hair = document.getElementById("hair20").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair20").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -29px; left: -11px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair21(){
    var hair = document.getElementById("hair21").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair21").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -20px; left: 7px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair22(){
    var hair = document.getElementById("hair22").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair22").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -15px; left: -30px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair23(){
    var hair = document.getElementById("hair23").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair23").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -12px; left: 4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair24(){
    var hair = document.getElementById("hair24").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair24").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -28px; left: -2px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair25(){
    var hair = document.getElementById("hair25").innerHTML; 
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair25").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -27px; left: 6px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair26(){
    this.buttonHairRemove();
    var hair = document.getElementById("hair26").innerHTML;
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair26").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -4px; left: 2.73px; margin-top: 0; z-index: 4;"); }
    /* var hair = document.querySelector("#hair26 .hair");
    var hairBack = document.querySelector("#hair26 .hairBack");
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += hair;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -4px; left: 2.73px; margin-top: 0; z-index: 4;"); }
    relativeContainer.innerHTML += hairBack;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -4px; left: 3px; margin-top: 0; z-index: -4;"); } */
  }
  buttonHair27(){
    var hair = document.getElementById("hair27").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair27").innerHTML;    
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -7px; left: -8px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair28(){
    var hair = document.getElementById("hair28").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair28").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -11px; left: 1px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair29(){
    var hair = document.getElementById("hair29").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair29").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -23px; left: 4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair30(){
    var hair = document.getElementById("hair30").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair30").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: -13px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair31(){
    var hair = document.getElementById("hair31").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair31").innerHTML;
    if(document.querySelector("#relativeContainer .hair") !== null){
      var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -22px; left: 4px; margin-top: 0; z-index: 4;"); }
    }
  }
  buttonHair32(){
    var hair = document.getElementById("hair32").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair32").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: 4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair33(){
    var hair = document.getElementById("hair33").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair33").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -11px; left: -29px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair34(){
    var hair = document.getElementById("hair34").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair34").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -18px; left: 4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair35(){
    var hair = document.getElementById("hair35").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair35").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: -2px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair36() {
    var hair = document.getElementById("hair36").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair36").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -12px; left: 0; margin-top: 0; z-index: 4;"); }
  }
}