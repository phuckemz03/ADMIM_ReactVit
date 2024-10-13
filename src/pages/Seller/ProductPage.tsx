import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Table from '../../components/Seller/Table';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Quản Lý Sản Phẩm" />

      <div className="flex flex-col gap-10">
        <Table />
      </div>
    </>
  );
};

export default Tables;
