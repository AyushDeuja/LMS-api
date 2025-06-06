// import { useDispatch, useSelector } from "react-redux";
// import Button from "../components/Button";
// import { useNavigate } from "react-router";
// import { RootState } from "../redux/store";
// import { useEffect } from "react";
// import { PencilIcon, Trash2Icon } from "lucide-react";
// import { addBook } from "../redux/slices/booksSlice";

// export interface Book {
//   title?: string;
//   author?: string;
//   id?: number;
//   quantity?: number;
//   availability?: boolean;
//   book_img?: string;
// }

// const BooksWithRedux = () => {
//   // const { bookData, onDelete } = useBook();
//   const navigate = useNavigate();
//   const { data, isLoading, error } = useSelector(
//     (state: RootState) => state.books
//   );
//   console.log(data);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(addBook());
//   }, []);

//   return (
//     <div className="h-full w-full flex flex-col">
//       <div className="flex items-center justify-between p-4">
//         <h1 className="text-2xl font-bold text-center">Books</h1>
//         <Button
//           label="Add Book"
//           type="button"
//           className="p-4"
//           onClick={() => navigate("/add-book")}
//         />
//       </div>
//       <div className="flex-1 overflow-x-auto overflow-y-auto">
//         <table className="w-full border-collapse bg-white shadow-xl rounded-lg">
//           <thead className="sticky top-0 bg-gradient-to-l from-indigo-700 to-purple-600 text-white z-10">
//             <tr>
//               <th className="py-3 px-6 text-left">Title</th>
//               <th className="py-3 px-6 text-left">Author</th>
//               <th className="py-3 px-6 text-left">Quantity</th>
//               <th className="py-3 px-6 text-left">Book Image</th>
//               <th className="py-3 px-6 text-left">Availability</th>
//               <th className="py-3 px-6 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((book) => (
//               <tr
//                 key={book.id}
//                 className={`bg-white hover:bg-indigo-100 transition-colors`}
//               >
//                 <td className="py-3 px-6 border-b border-gray-200 font-bold text-lg">
//                   {book.title}
//                 </td>
//                 <td className="py-3 px-6 border-b border-gray-200 font-semibold">
//                   {book.author}
//                 </td>
//                 <td className="py-3 px-6 border-b border-gray-200">
//                   {book.quantity}
//                 </td>
//                 <td className="py-3 px-6 border-b border-gray-200">
//                   {book.book_img ? (
//                     <img
//                       src={book.book_img}
//                       alt={book.title}
//                       className="w-16 h-16 object-cover rounded-md"
//                     />
//                   ) : (
//                     "No Image Available"
//                   )}
//                 </td>
//                 <td className="py-3 px-6 border-b border-gray-200 font-semibold">
//                   {book.availability === true ? (
//                     <p className="text-green-600">Available</p>
//                   ) : (
//                     <p className="text-red-600">Not Available</p>
//                   )}
//                 </td>
//                 <td>
//                   <div className="flex items-center justify-center gap-4">
//                     <PencilIcon
//                       className="text-blue-400 cursor-pointer"
//                       // onClick={() => navigate(`/edit-book/${book.id}`)}
//                     />
//                     <Trash2Icon
//                       className="text-red-400 cursor-pointer"
//                       // onClick={() => openModal(book.id as number)}
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BooksWithRedux;
