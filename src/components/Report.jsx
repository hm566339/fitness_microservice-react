// import { useSelector } from "react-redux";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export const Report = () => {
//   // Get report data from Redux
//   const report = useSelector((state) => state.report);

//   console.log(report);

//   if (!report) {
//     return <p className="text-gray-500">No report data available</p>;
//   }

//   return (
//     <Accordion
//       type="single"
//       collapsible
//       className="w-full"
//       defaultValue="item-1"
//     >
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Recommendation</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           <p>{report.recommendationText}</p>
//         </AccordionContent>
//       </AccordionItem>

//       <AccordionItem value="item-2">
//         <AccordionTrigger>Improvements</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           {report.improvments && report.improvments.length > 0 ? (
//             <ul className="list-disc ml-5 space-y-2">
//               {report.improvments.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No improvements provided</p>
//           )}
//         </AccordionContent>
//       </AccordionItem>

//       <AccordionItem value="item-3">
//         <AccordionTrigger>Suggestions</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           {report.suggestions && report.suggestions.length > 0 ? (
//             <ul className="list-disc ml-5 space-y-2">
//               {report.suggestions.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No suggestions provided</p>
//           )}
//         </AccordionContent>
//       </AccordionItem>

//       <AccordionItem value="item-4">
//         <AccordionTrigger>Safety</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           {report.safety && report.safety.length > 0 ? (
//             <ul className="list-disc ml-5 space-y-2">
//               {report.safety.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No safety tips provided</p>
//           )}
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// import { useSelector } from "react-redux";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export const Report = () => {
//   const { data, loading, error } = useSelector((state) => state.report);

//   if (loading) {
//     return <p className="text-gray-500">Loading report...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">Error: {error}</p>;
//   }

//   if (!data) {
//     return <p className="text-gray-500">No report data available</p>;
//   }

//   // Normalization (backend agar alag keys bhejta hai to bhi safe)
//   const {
//     recommendationText = "No recommendation provided",
//     improvments = [], // ⚠ spelling agar backend se `improvements` aaye, to dono handle karne ke liye neeche check kar rahe hain
//     improvements = [],
//     suggestions = [],
//     safety = [],
//   } = data;

//   const finalImprovements = improvments.length ? improvments : improvements;

//   console.log(data);

//   return (
//     <Accordion
//       type="single"
//       collapsible
//       className="w-full"
//       defaultValue="item-1"
//     >
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Recommendation</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           <p>{data.recommendationText}</p>
//         </AccordionContent>
//       </AccordionItem>

//       <AccordionItem value="item-2">
//         <AccordionTrigger>Improvements</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           {finalImprovements.length > 0 ? (
//             <ul className="list-disc ml-5 space-y-2">
//               {finalImprovements.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No improvements provided</p>
//           )}
//         </AccordionContent>
//       </AccordionItem>

//       <AccordionItem value="item-3">
//         <AccordionTrigger>Suggestions</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           {suggestions.length > 0 ? (
//             <ul className="list-disc ml-5 space-y-2">
//               {suggestions.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No suggestions provided</p>
//           )}
//         </AccordionContent>
//       </AccordionItem>

//       <AccordionItem value="item-4">
//         <AccordionTrigger>Safety</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           {safety.length > 0 ? (
//             <ul className="list-disc ml-5 space-y-2">
//               {safety.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No safety tips provided</p>
//           )}
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Report = () => {
  const { data, loading, error } = useSelector((state) => state.report);

  if (loading) {
    return <p className="text-gray-500">Loading report...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!data) {
    return <p className="text-gray-500">No report data available</p>;
  }

  // Agar array hai to wahi use karo, agar object hai to array bana lo
  const reports = Array.isArray(data) ? data : [data];

  return (
    <div className="w-full space-y-6">
      {reports.map((report, idx) => {
        const {
          recommendationText = "No recommendation provided",
          improvments = [],
          improvements = [],
          suggestions = [],
          safety = [],
        } = report;

        const finalImprovements =
          improvments.length > 0 ? improvments : improvements;

        return (
          <Accordion
            key={idx}
            type="single"
            collapsible
            className="w-full border rounded-lg p-2"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Recommendation</AccordionTrigger>
              <AccordionContent>
                <p>{recommendationText}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Improvements</AccordionTrigger>
              <AccordionContent>
                {finalImprovements.length > 0 ? (
                  <ul className="list-disc ml-5 space-y-2">
                    {finalImprovements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No improvements provided</p>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Suggestions</AccordionTrigger>
              <AccordionContent>
                {suggestions.length > 0 ? (
                  <ul className="list-disc ml-5 space-y-2">
                    {suggestions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No suggestions provided</p>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Safety</AccordionTrigger>
              <AccordionContent>
                {safety.length > 0 ? (
                  <ul className="list-disc ml-5 space-y-2">
                    {safety.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No safety tips provided</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};
