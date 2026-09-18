
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(dataAbsensi)
    );


    const map = {
        Hadir: "status-hadir",
        Izin: "status-izin",
        Sakit: "status-sakit",
        Alpa: "status-alpa"
    };

    return map[status] || "";

            <td>${item.tanggal}</td>

            <td>
                <span class="status-badge ${getStatusClass(item.status)}">
                    ${item.status}
                </span>
            </td>

            <td>
                <button

                    Hapus
                </button>
            </td>
        `;



//tugas kamu disini

renderTabel();