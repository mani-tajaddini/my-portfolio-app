import { useEffect } from "react";
import Navbar from "./Navbar";

const NavbarHomepage = () => {
  useEffect(() => {
    $("#navigation li.come-slowly-towards a").click(function(e) {
      e.preventDefault();

      let ref = $(this).attr("href");
      let targetElement = ref.substring(ref.indexOf("#"));

      let targetPosition = $(targetElement).offset().top;
      $("html, body").animate({ scrollTop: targetPosition - 30 }, "slow");
    });
  }, []);

  return (
    <div className="sticky-top">
      <Navbar />
    </div>
  );
};

export default NavbarHomepage;
