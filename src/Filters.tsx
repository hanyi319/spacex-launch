import { Space, Input, DatePicker, Select, Button, Switch } from "@arco-design/web-react";
import "./Filters.css";

const Option = Select.Option;

const Filters = () => {
  return (
    <>
      <div className="filter-container">
        <Space size="large">
          <Input style={{ width: 200 }} size="large" allowClear placeholder="发射项目名" />
          <DatePicker style={{ width: 200 }} size="large" placeholder="开始发射时间" />
          <DatePicker style={{ width: 200 }} size="large" placeholder="结束发射时间" />
          <Select style={{ width: 200 }} size="large" allowClear placeholder="发射状态">
            <Option value={"all"}>全部</Option>
            <Option value={1}>是</Option>
            <Option value={0}>否</Option>
          </Select>
          <Button size="large">搜索</Button>
        </Space>
      </div>
    </>
  );
};

export default Filters;
