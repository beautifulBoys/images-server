<template>
  <div class="home">
    <div class="header">
      <el-button-group class="btn-group">
        <el-button type="primary" size="small" icon="el-icon-upload2">上传</el-button>
      </el-button-group>
      <el-button-group class="btn-group">
        <el-button size="small" icon="el-icon-upload2">新建文件夹</el-button>
      </el-button-group>
      <el-button-group class="btn-group">
        <el-button icon="el-icon-download" size="small">下载</el-button>
        <el-button icon="el-icon-delete" size="small">复制</el-button>
        <el-button icon="el-icon-rank" size="small">移动</el-button>
        <el-button icon="el-icon-delete" size="small">删除</el-button>
      </el-button-group>
    </div>
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        <span class="status">已全部加载，共65个</span>
      </el-breadcrumb>
    </div>
    <div class="content" :style="`height: ${scrollHeight}px`" ref="box_content">
      <template v-for="item in list">
        <image-item :data="item" class="item-hook" @selectOneItem="selectOneItem(item)"></image-item>
      </template>
    </div>
    <div class="select-area" v-show="width > 0 && height > 0 && select_status"
      :style="`width: ${width}px; height: ${height}px; top: ${posY}px; left: ${posX}px`">
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import imageItem from '../components/image_item.vue'
import list from './data.js'
  export default {
    components: {
      'image-item': imageItem
    },
    data () {
      return {
        select_status: false, // 是否在勾选的状态
        select_area: {
          x: 0,
          y: 0,
          w: 0,
          h: 0
        },
        list: []
      }
    },
    computed: {
      scrollHeight () {
        return this.$store.state.size.clientHeight - 144
      },
      width () {
        return Math.abs(this.select_area.w)
      },
      height () {
        return Math.abs(this.select_area.h)
      },
      posX () {
        if (this.select_area.w > 0) return this.select_area.x
        else return this.select_area.w + this.select_area.x
      },
      posY () {
        if (this.select_area.h > 0) return this.select_area.y
        else return this.select_area.h + this.select_area.y
      },
      ...mapState({

      })
    },
    mounted () {
      this.selectInit()
      list.forEach((item, i) => {
        this.list.push({
          ...item,
          selected: false,
          position: {
            x: 0,
            y: 0,
            w: 0,
            h: 0
          }
        })
      })
      this.initPosition()
    },
    methods: {
      ...mapMutations({
        select_area_change: 'size/select_area_change'
      }),
      initPosition () {
        this.$nextTick(() => {
          let items = document.getElementsByClassName('item-hook')
          this.list.forEach((item, i) => {
            item.position = {
              x: items[i].offsetLeft,
              y: items[i].offsetTop,
              w: items[i].clientWidth,
              h: items[i].clientHeight
            }
          })
        })
      },
      selectInit () {
        this.$refs.box_content.onmousedown = (e) => {
          this.select_status = true
          this.select_area = { x: e.clientX, y: e.clientY, w: 0, h: 0 }
        }
        document.onmousemove = (e) => {
          if (this.select_status) {
            this.select_area = {
              x: this.select_area.x,
              y: this.select_area.y,
              w: e.clientX - this.select_area.x,
              h: e.clientY - this.select_area.y
            }
            this.selectCheckItem(this.posX, this.posY, this.width, this.height)
          }
        }
        document.onmouseup = (e) => {
          this.select_area = { x: 0, y: 0, w: 0, h: 0 }
          this.select_status = false
        }
      },
      selectOneItem (selectItem) {
        if (this.selectNum() > 1) {
          this.list.forEach(item => {
            if (item.id === selectItem.id) item.selected = true
          })
        } else {
          this.list.forEach(item => {
            if (item.id === selectItem.id) item.selected = true
            else item.selected = false
          })
        }
      },
      selectCheckItem (sx, sy, sw, sh) { // 勾选是判断扫过的文件，参数为：选取坐标
        let x1 = sx, x2 = sx + sw, y1 = sy, y2 = sy + sh
        this.list.forEach(item => {
          let nx1 = item.position.x, nx2 = item.position.x + item.position.w, ny1 = item.position.y, ny2 = item.position.y + item.position.h
          let arr = []
          arr.push({x: nx1, y: ny1}, {x: nx1, y: ny2}, {x: nx2, y: ny1}, {x: nx2, y: ny2})
          let status = this.some(arr, x1, x2, y1, y2)
          if (status) item.selected = true
          else item.selected = false
        })
      },
      selectNum () {
        let i = 0
        this.list.forEach(item => {
          if (item.selected) i++
        })
        return i
      },
      some (arr, x1, x2, y1, y2) {
        return arr.some(item => (item.x > x1 && item.x < x2 && item.y > y1 && item.y < y2))
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      padding: 10px 10px;
      box-sizing: border-box;
      .btn-group {
        margin-right: 10px;
      }
    }
    .bread {
      width: 100%;
      padding: 5px 15px 10px 15px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      .status {
        float: right;
        font-size: 14px;
        color: #606266;
      }
    }
    .content {
      width: 100%;
      padding: 10px;
      overflow-y: scroll;
      box-sizing: border-box;
    }
  }
  .select-area {
    position: fixed;
    z-index: 1000;
    border: 1px dashed rgb(0, 153, 255);
    background: rgba(0, 153, 255, 0.15);
  }
</style>
<style>
::-webkit-scrollbar {
  width: 10px;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.2);
  background: #f6f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
  background: rgba(59, 140, 255, 0.1);
}
::-webkit-scrollbar-thumb:hover {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.4);
  background: rgba(59, 140, 255, 0.2);
}
</style>
