import AMapLoader from "@amap/amap-jsapi-loader";
import React, { Component } from "react";
import styles from "./MapContainer.css";

class MapComponent extends Component {
  constructor() {
    super();
    this.map = null;
  }
  // 2.dom渲染成功后进行map对象的创建
  componentDidMount() {
    window._AMapSecurityConfig = {
      securityJsCode: "57c2d13009aca4f990327fd590d9b506",
    };
    AMapLoader.load({
      key: "13143327b6799d21c73f2de649538bf6", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.Geocoder"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    })
      .then((AMap) => {
        this.map = new AMap.Map("container", {
          //设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          zoom: 5, //初始化地图级别
          center: [105.602725, 37.076636], //初始化地图中心点位置
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    // 1.初始化创建地图容器,div标签作为地图容器，同时为该div指定id属性；
    return <div id="container" className={styles.container} style={{ height: "800px" }}></div>;
  }
}
//导出地图组建类
export default MapComponent;
