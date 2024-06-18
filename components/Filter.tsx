export default function FilterInput() {
    return (
      <div>
        <select className="text-white bg-[#0B4424] p-2">
          <option value="" className="border-1 border-white p-2">Sort by genre</option>
          <option value="Eg1">Eg1</option>
          <option value="Eg2">Eg2</option>
          <option value="Eg3">Eg3</option>
          <option value="Eg4">Eg4</option>
          <option value="Eg5">Eg5</option>
        </select>
      </div>
    );
  }