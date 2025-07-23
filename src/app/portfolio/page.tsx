import CommonBannerComponent from "@/components/ui-section/CommonBanner";
import PortfolioGrid from "@/components/ui-section/PortfolioGrid";

const PortfolioComponent = () => {
  return (
    <>
      <div>
        <CommonBannerComponent title="Our Portfolio" />
      </div>
      <PortfolioGrid />
    </>
  );
};
export default PortfolioComponent;
