import React, { useState } from "react";

import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
// import EmailPopup from "./EmailPopup";
import TicketPopup from "./TicketPopup";
const data = [
  {
    id: 1,
    description: "Create login page",
    status: "in progress",
    project: "Web Development",
  },
  {
    id: 2,
    description: "Fix bugs in shopping cart",
    status: "closed",
    project: "E-commerce",
  },
  {
    id: 3,
    description: "Implement new payment gateway",
    status: "open",
    project: "E-commerce",
  },
  {
    id: 4,
    description: "Design logo for new product",
    status: "in progress",
    project: "Graphic Design",
  },
  {
    id: 5,
    description: "Develop iOS app",
    status: "open",
    project: "Mobile Development",
  },
  {
    id: 6,
    description: "Create social media strategy",
    status: "closed",
    project: "Marketing",
  },
  {
    id: 7,
    description: "Write blog posts for website",
    status: "in progress",
    project: "Content Creation",
  },
  {
    id: 8,
    description: "Test website on multiple devices",
    status: "open",
    project: "Web Development",
  },
  {
    id: 9,
    description: "Create wireframes for new website",
    status: "closed",
    project: "UI/UX Design",
  },
  {
    id: 10,
    description: "Research and analyze competitors",
    status: "in progress",
    project: "Market Research",
  },
  {
    id: 11,
    description: "Develop new feature for app",
    status: "open",
    project: "Mobile Development",
  },
  {
    id: 12,
    description: "Create email marketing campaign",
    status: "closed",
    project: "Marketing",
  },
  {
    id: 13,
    description: "Design brochure for new product",
    status: "in progress",
    project: "Graphic Design",
  },
  {
    id: 14,
    description: "Implement new database system",
    status: "open",
    project: "Database Management",
  },
  {
    id: 15,
    description: "Write user manuals for software",
    status: "closed",
    project: "Technical Writing",
  },
  {
    id: 16,
    description: "Create wireframes for mobile app",
    status: "in progress",
    project: "UI/UX Design",
  },
  {
    id: 17,
    description: "Develop new API for web app",
    status: "open",
    project: "Web Development",
  },
  {
    id: 18,
    description: "Create product launch plan",
    status: "closed",
    project: "Marketing",
  },
  {
    id: 19,
    description: "Design website layout",
    status: "in progress",
    project: "UI/UX Design",
  },
];

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [];

  const visiblePages = 3; // Number of visible page pills
  const maxLeft = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  const maxRight = Math.min(maxLeft + visiblePages - 1, totalPages);

  for (let i = maxLeft; i <= maxRight; i++) {
    pageNumbers.push(i);
  }

  function handlePageChange(pageNumber) {
    onPageChange(pageNumber);
  }

  const abc = () => {
    // setCurrentPage(1);
    // paginate(1);
    onPageChange(1);
    console.log("first");
  };

  const lastArrow = () => {
    onPageChange(totalPages);
    // console.log("last");
  };

  return (
    <nav className="flex  justify-center mt-10">
      <ul className="pagination flex items-center  rounded-lg hover:cursor-pointer">
        <li>
          <AiOutlineLeft
            className="hover:text-blue-500 hover:cursor-pointer text-xl"
            onClick={abc}
          />
        </li>
        {currentPage !== 1 ? (
          <li
            className="g-white  hover:underline text-blue-500 font-semibold py-2 px-4 xs:px-2 md:px-1 xs:font-xs border-none"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </li>
        ) : (
          <li
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-none  xs:px-1 opacity-50 cursor-not-allowed"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </li>
        )}
        {pageNumbers[0] !== 1 && (
          <li
            className="page-item xs:m-1 m-2 font-semibold"
            onClick={() => handlePageChange(1)}
          >
            1
          </li>
        )}
        {pageNumbers[0] > 2 && (
          <li className="page-item disabled m-2 xs:m-1">...</li>
        )}
        {pageNumbers.map((pageNumber, index) => (
          <li
            key={index}
            // className={`page-item${
            //   pageNumber === currentPage ? " active" : ""
            // } m-2`}
            className={`${
              pageNumber === currentPage
                ? // "bg-blue-500 hover:bg-blue-700 text-white rounded-md border-none"
                  "text-blue-700 border-none underline  hover:text-blue-700 "
                : "hover:text-blue-700 border-none"
            } font-semibold py-2 xs:px-2 px-4 border border-gray-400`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
        {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
          <li className="page-item disabled m-2">...</li>
        )}
        {pageNumbers[pageNumbers.length - 1] !== totalPages && (
          <li
            className="page-item "
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </li>
        )}
        {currentPage !== totalPages ? (
          <li
            className="g-white  hover:underline text-blue-500 font-semibold py-2 md:px-4 xs:px-2 border-none"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </li>
        ) : (
          <li
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 xs:px-2 mdpx-4 border-none  opacity-50 cursor-not-allowed"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </li>
        )}

        <li>
          <AiOutlineRight
            className="hover:text-blue-500 hover:cursor-pointer text-xl"
            onClick={lastArrow}
          />
        </li>
      </ul>
    </nav>
  );
}

const UserTickets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(data.length / postsPerPage);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const idUpData = () => {
    console.log("idUp");
  };

  const idDownData = () => {
    console.log("idDown");
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full md:mb-20 mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-blue-700">
              Ticket Details
            </h1>
          </div>
          <div className="md:flex items-center md:justify-between xs:hidden">
            <div className="xs:flex md:hidden">
              <TicketPopup />
            </div>

            <div className="border-blue-400 outline-none rounded-lg mb-4 flex justify-between items-center xs:w-full md:w-96 h-12 border px-4">
              <input type="search" className="border-none outline-none w-5/6" />
              <AiOutlineSearch />
            </div>
            <div className="hidden md:flex">
              <TicketPopup />
            </div>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    <div className="flex items-center">
                      <BiUpArrowAlt
                        className="hover:cursor-pointer"
                        onClick={idUpData}
                      />
                      Id
                      <BiDownArrowAlt
                        className="hover:cursor-pointer"
                        onClick={idDownData}
                      />
                    </div>
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    <div className="flex items-center">
                      <BiUpArrowAlt
                        className="hover:cursor-pointer"
                        onClick={idUpData}
                      />
                      Description
                      <BiDownArrowAlt
                        className="hover:cursor-pointer"
                        onClick={idDownData}
                      />
                    </div>
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    <div className="flex items-center">
                      <BiUpArrowAlt
                        className="hover:cursor-pointer"
                        onClick={idUpData}
                      />
                      Status
                      <BiDownArrowAlt
                        className="hover:cursor-pointer"
                        onClick={idDownData}
                      />
                    </div>
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    <div className="flex items-center">
                      <BiUpArrowAlt
                        className="hover:cursor-pointer"
                        onClick={idUpData}
                      />
                      Project
                      <BiDownArrowAlt
                        className="hover:cursor-pointer"
                        onClick={idDownData}
                      />
                    </div>
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((e) => (
                  <tr key={e.id} className="border">
                    <td className="px-4 py-3">{e.id}</td>
                    <td className="px-4 py-3">{e.description} </td>
                    <td className="px-4 py-3">{e.status}</td>
                    <td className="px-4 py-3">{e.project}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default UserTickets;
