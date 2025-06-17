const Student = ({ data }) => {
  return (
    <div className="h-[250px] w-[400px] rounded-2xl bg-gradient-to-r  from-sky-200 via-sky-300 to-blue-300 border-1 border-cyan-500">
      <section className="bg-gradient-to-r rounded-t-2xl from-blue-200  via-sky-500 to-sky-900 h-[45px] place-content-around flex-1 ">
        <img
          className="p-1 ml-2 h-full"
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
          <div>
            <h3 className="font-bold text-center">STUDENT ID CARD</h3>

            <section className="flex gap-2">
              <section>
                <p className="text-sm">Name</p>
                <p className="text-sm">Student ID</p>
                <p className="text-sm">Religion</p>
                <p className="text-sm">Year</p>
              </section>

              <section>
                <p className="text-sm">:{data.first_name}</p>
                <p className="text-sm">:{data.lrn_number}</p>
                <p className="text-sm">:{data.religion}</p>
                <p className="text-sm">:{data.birth_date}</p>
              </section>
            </section>

            <img
              className="mt-4 h-[20px] w-[200px]"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fonehack.us%2Fuploads%2Fdefault%2Foriginal%2F3X%2Fe%2F5%2Fe5478602f8b3ba31da66edc65f7bfa640d6aaa8c.jpeg&f=1&nofb=1&ipt=7ae9c098391de7d8f46e6eccb8afc7441efcc358d20bb83226bb6a8e2bb64f89"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Student;
