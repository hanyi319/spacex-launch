import { Space, Input, DatePicker, Select, Button } from "@arco-design/web-react";
import { IconSearch } from "@arco-design/web-react/icon";
import "./Filters.css";

const { RangePicker } = DatePicker;
const Option = Select.Option;

const Filters = () => {
  return (
    <>
      <div className="filter-container">
        <Space size="large">
          <Input style={{ width: 200 }} size="large" allowClear placeholder="Launch Project" />
          <RangePicker
            style={{ width: 400 }}
            size="large"
            showTime={{
              format: "HH:mm",
            }}
            format="YYYY-MM-DD HH:mm"
            placeholder={["Start Date", "Finish Date"]}
          />
          <Select style={{ width: 200 }} size="large" allowClear placeholder="Launch Status">
            <Option value={"all"}>All</Option>
            <Option value={1}>Yes</Option>
            <Option value={0}>No</Option>
          </Select>
          <Button type="primary" size="large" icon={<IconSearch />} style={{ padding: "0 10px" }}>
            Search
          </Button>
        </Space>
      </div>
    </>
  );
};

export default Filters;
