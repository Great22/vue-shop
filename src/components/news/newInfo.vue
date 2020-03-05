<template>
  <div class="newInfo">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="sub-title">
      <span>发表时间：{{newsInfo.date}}</span>
      <span>点击：{{count}}次</span>
    </p>
    <hr />
    <div class="content">
      <p>{{html}}</p>
      <img src="../../../static/newInfoImages/newinfo-1.jpeg" />
      <p>MQ-4C“人鱼海神”无人机是美国“全球鹰”家族中战略级无人机，其机身极为庞大，全长14.5米，机翼宽度39.9米，机身高度4.7米，起飞重量达14.8吨，巡航速度约每小时610公里，最大巡航里程1.5万公里，续航时间为30个小时，一般在1.8万米高空进行侦查任务，单次航程能够对700万平方公里的区域进行高清图侦察。</p>
      <img src="../../../static/newInfoImages/newinfo-2.jpeg" alt />
      <p>AN/ZPY-3多功能主动探测器为MQ-4C“人鱼海神”无人机的性能带来了质的飞跃，可对区域进行持续不断地全方位扫描，能在2万米高空穿透云雨、沙尘暴等阻碍提供高清晰度图像，能对小于1平方米大小的目标进行空中拍摄，甚至可拍摄只有0.3平方米大小的物体。经过计算机处理，可以整合成一幅详尽的合成战场图像，实时发送给有关参战舰只。固定在机腹的设备，在18公里高空可以监视700万平方公里海面，并进行360度全方位扫描或5200平方公里海面的单次扫描。MQ-4C“人鱼海神”无人机在多云天气发现可疑目标后，能下降至5000米高度，通过合成孔径雷达对目标进行探测、识别和跟踪，识别目标是军舰、货轮、渔船，还是浮出水面的潜艇。与其他无人机不同的是，MQ-4C“人鱼海神”无人机可以由地面站人员设定好侦察区域、速度和高度，按照设定程序自动飞行。</p>
      <img src="../../../static/newInfoImages/newinfo-3.jpeg" alt />
      <p>MQ-4C“人鱼海神”无人机还配备了雷神公司的AN/ALR-89自卫组件，其中包含AN/AVR-3激光警告系统、AN/APR-49雷达警告系统以及干扰系统，让其可以在第一时间感知到被其他武器瞄准，还搭载了两具ALE-50拖曳诱饵导弹，可以让其在关键时刻躲避制导导弹的打击。</p>
      <img src="../../../static/newInfoImages/newinfo-4.jpeg" alt />
      <p>2032年之前，美军将在5个基地完成MQ-4C“人鱼海神”无人机部署，与117架P-8A“海神”反潜巡逻机一起，实现无人机与有人机无缝整合，根据需要可同时进行高空巡航与低空飞行，对全球重点地区实施不间断监视，极大增强美国海军的战略侦察能力。</p>
      <img src="../../../static/newInfoImages/newinfo-5.jpeg" alt />
    </div>
    <comment-box></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment";
export default {
  components: {
    "comment-box": comment
  },
  data() {
    return {
      newsInfo: {}, //新闻对象
      // type: "keji",
      count: 2,
      uniquekey: this.$route.params.id,
      html:
        "MQ-4C“人鱼海神”无人机基于“全球鹰”无人机设计，是一型具有自主能力的情报、监视和侦察无人机，携带有海上雷达、白光/红外传感器、电子战系统、目标自动识别系统和通信中继设备，可以与海军已服役的P-8A反潜巡逻机搭配使用。该型无人机的造价比较昂贵，比F-35战斗机的造价都要高。"
    };
  },
  created() {
    this.getNewInfo();
  },
  methods: {
    getNewInfo() {
      this.$http.get("../../../static/staticData/newList.json").then(res => {
        // console.log(res);
        res.data.result.data.forEach(item => {
          if (item.uniquekey === this.uniquekey) {
            this.newsInfo = item;
          }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.newInfo {
  padding: 0 5px;
  .title {
    font-size: 14px;
    color: red;
    text-align: center;
    font-size: 16px;
    margin: 15px 0;
  }
  .sub-title {
    font-size: 13px;
    display: flex;
    color: #226aff;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>