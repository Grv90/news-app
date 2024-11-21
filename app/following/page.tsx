import SectionHeader from "../components/SectionHeader";

const FollowingPage = () => {
  return (
    <>
      <SectionHeader
        heading="Following"
        subtitle="Subtitle goes here, describing the content below."
      />
      <div className="max-w-full p-4 bg-white rounded-lg shadow-md sm:p-6 sm:max-w-3xl">
        <h1>Welcome to the Following Page</h1>
        <p>This is your new page in the Next.js app.</p>
      </div>
    </>
  );
};

export default FollowingPage;
