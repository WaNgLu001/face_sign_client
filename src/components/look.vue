<template>
    <div class="wrap">
     <el-table
     class='table'
    :data="tableData"
    stripe
    border
    style="width: 100%">
    <el-table-column
      prop="NAME"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="mon"
      label="周一"
      width="50">
    </el-table-column>
    <el-table-column
      prop="tues"
      label="周二"
      width="50">
    </el-table-column>
    <el-table-column
      prop="wed"
      label="周三"
      width="50">
    </el-table-column>
    <el-table-column
      prop="thur"
      label="周四"
      width="50">
    </el-table-column>
    <el-table-column
      prop="fri"
      label="周五"
      width="50">
    </el-table-column>
    <el-table-column
      prop="sat"
      label="周六"
      width="50">
    </el-table-column>
    <el-table-column
      prop="sun"
      label="周日"
      width="50">
    </el-table-column>

  </el-table></div>
</template>
<script>
export default {
    data(){
        return {
        tableData: []
        }
    },
    async created(){
        const {data} = await this.$axios.get('/getClass?type='+ this.$route.params.type)
         this.tableData = data.data
    }
}
</script>
<style scoped>
.table{
    margin-top: 20px;
}
.wrap{
    /* height: 100%; */
}
</style>