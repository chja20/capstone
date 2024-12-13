import React from "react";
import "./styles/Pagination.css";

function Pagination({ cardsPerPage, totalCards, paginate, currentPage }) {
  const pageNumbers = [];

  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const maxVisiblePages = 5; // 한 번에 표시할 최대 페이지 수

  // 현재 페이지에 따라 표시할 페이지 범위 계산
  const startPage =
    Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  // 페이지 번호 배열 생성
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {/* 이전 버튼 */}
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1} // 첫 페이지에서는 비활성화
          >
            이전
          </button>
        </li>

        {/* 페이지 번호 */}
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}

        {/* 다음 버튼 */}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages} // 마지막 페이지에서는 비활성화
          >
            다음
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
