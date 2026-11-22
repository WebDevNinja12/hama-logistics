import PageBanner from "@/components/layout/PageBanner";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy policy" crumbs={[{ label: "Privacy" }]} tone="slate" />
      <div className="container-app prose prose-slate max-w-3xl py-12">
        <p>
          We collect account, booking and payment information to operate Hama Logistics services.
          Data is processed in line with applicable Nigerian data protection rules. Contact
          support@hamalogistics.ng for access or deletion requests.
        </p>
      </div>
    </>
  );
}
