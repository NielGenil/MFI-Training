const Student = ({ data }) => {
  return (
    <div className="h-[250px] w-[400px] rounded-2xl bg-gray-300">
      <section className="p-t-2 h-[40px] flex-1">
        <img
          className="h-full"
          src="https://www.southerncalibration.com/image/logo.png"
          alt=""
        />
      </section>

      <div className=" flex items-center justify-center gap-2">
        <section className="flex w-[160px] h-[200px] items-center justify-center">
          <img
            className="h-[150px] w-[140px] rounded-lg"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgcdn.stablediffusionweb.com%2F2024%2F2%2F25%2F2bc4edde-44f2-4cd0-9c1c-5c18e70bd276.jpg&f=1&nofb=1&ipt=e9dad0115aa2d1089a526a2e06190a7dcdba0d6224efc146e4b2f524377a6e4d"
            alt=""
          />
        </section>

        <section className="flex-1 min-h-0 min-w-0">
          <h3 className="font-bold text-center">STUDENT ID CARD</h3>

          <h4 className="flex   ">Name: {data.first_name}</h4>

          <p className="text-sm">Student ID: {data.first_name}</p>
          <p className="text-sm">Course: {data.first_name}</p>
          <p className="text-sm">Year: {data.first_name}</p>

          <img
            className="h-[20px] w-[200px]"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fonehack.us%2Fuploads%2Fdefault%2Foriginal%2F3X%2Fe%2F5%2Fe5478602f8b3ba31da66edc65f7bfa640d6aaa8c.jpeg&f=1&nofb=1&ipt=7ae9c098391de7d8f46e6eccb8afc7441efcc358d20bb83226bb6a8e2bb64f89"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Student;
