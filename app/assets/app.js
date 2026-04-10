/**
 * ASPAL — Shared Application Logic
 * Handles all button interactions, modals, toasts, and UI states.
 */

document.addEventListener("DOMContentLoaded", () => {

    // ─── BACK BUTTONS ───
    const backButtons = document.querySelectorAll('[data-action="back"]');
    backButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    });

    // ─── NAVIGATION TAP FEEDBACK ───
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => { this.style.transform = ''; }, 150);
        });
    });

    // ─── NOTIFICATION BUTTON ───
    document.querySelectorAll('[data-action="notifications"]').forEach(btn => {
        btn.addEventListener('click', () => {
            showModal('notificationModal');
        });
    });

    // ─── SHARE BUTTON ───
    document.querySelectorAll('[data-action="share"]').forEach(btn => {
        btn.addEventListener('click', () => {
            const shareData = {
                title: 'ASPAL — Laporan Kerusakan Jalan',
                text: 'Lihat laporan kerusakan jalan yang terdeteksi oleh ASPAL di Jl. Pahlawan, Kebumen.',
                url: window.location.href
            };
            if (navigator.share) {
                navigator.share(shareData).catch(() => {});
            } else {
                // Fallback: copy link to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showToast('Link berhasil disalin ke clipboard!', 'content_copy');
                }).catch(() => {
                    showToast('Bagikan: ' + window.location.href, 'share');
                });
            }
        });
    });

    // ─── EDIT PROFILE ───
    document.querySelectorAll('[data-action="edit-profile"]').forEach(btn => {
        btn.addEventListener('click', () => {
            showModal('editProfileModal');
        });
    });

    // ─── PROFILE MENU ITEMS ───
    document.querySelectorAll('[data-action="menu-notifikasi"]').forEach(el => {
        el.addEventListener('click', () => {
            showModal('notifSettingsModal');
        });
    });

    document.querySelectorAll('[data-action="menu-bantuan"]').forEach(el => {
        el.addEventListener('click', () => {
            showModal('bantuanModal');
        });
    });

    document.querySelectorAll('[data-action="menu-keamanan"]').forEach(el => {
        el.addEventListener('click', () => {
            showModal('keamananModal');
        });
    });

    document.querySelectorAll('[data-action="logout"]').forEach(el => {
        el.addEventListener('click', () => {
            showModal('logoutModal');
        });
    });

    // ─── PROFILE AVATAR → navigate to profil.html ───
    document.querySelectorAll('[data-action="go-profile"]').forEach(el => {
        el.addEventListener('click', () => {
            window.location.href = 'profil.html';
        });
    });

    // ─── LIHAT SEMUA REPORTS ───
    document.querySelectorAll('[data-action="lihat-semua"]').forEach(el => {
        el.addEventListener('click', () => {
            showToast('Menampilkan semua laporan...', 'list');
            // Scroll down to list or navigate
            const section = document.querySelector('[data-section="reports"]');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ─── CAMERA FLASH TOGGLE ───
    document.querySelectorAll('[data-action="flash-toggle"]').forEach(btn => {
        let flashOn = false;
        btn.addEventListener('click', () => {
            flashOn = !flashOn;
            const icon = btn.querySelector('.material-symbols-outlined');
            if (flashOn) {
                icon.textContent = 'flash_off';
                btn.classList.add('bg-[#00ff87]/30');
                btn.classList.remove('bg-black/40');
                showToast('Flash diaktifkan', 'flash_on');
            } else {
                icon.textContent = 'flash_on';
                btn.classList.remove('bg-[#00ff87]/30');
                btn.classList.add('bg-black/40');
                showToast('Flash dimatikan', 'flash_off');
            }
        });
    });

    // ─── CAMERA GALLERY BUTTON ───
    document.querySelectorAll('[data-action="open-gallery"]').forEach(btn => {
        btn.addEventListener('click', () => {
            showToast('Membuka galeri foto...', 'photo_library');
        });
    });

    // ─── CAMERA SWITCH ───
    document.querySelectorAll('[data-action="switch-camera"]').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.querySelector('.material-symbols-outlined').style.transition = 'transform 0.4s';
            btn.querySelector('.material-symbols-outlined').style.transform = 'rotateY(180deg)';
            setTimeout(() => {
                btn.querySelector('.material-symbols-outlined').style.transform = '';
            }, 400);
            showToast('Kamera depan aktif', 'flip_camera_ios');
        });
    });

    // ─── MAP ZOOM CONTROLS ───
    let mapZoom = 100;
    document.querySelectorAll('[data-action="zoom-in"]').forEach(btn => {
        btn.addEventListener('click', () => {
            mapZoom = Math.min(mapZoom + 15, 200);
            applyMapZoom(mapZoom);
            showToast(`Zoom: ${mapZoom}%`, 'zoom_in');
        });
    });
    document.querySelectorAll('[data-action="zoom-out"]').forEach(btn => {
        btn.addEventListener('click', () => {
            mapZoom = Math.max(mapZoom - 15, 70);
            applyMapZoom(mapZoom);
            showToast(`Zoom: ${mapZoom}%`, 'zoom_out');
        });
    });

    // ─── MY LOCATION ───
    document.querySelectorAll('[data-action="my-location"]').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.add('animate-pulse');
            showToast('Mendeteksi lokasi Anda...', 'my_location');
            setTimeout(() => {
                btn.classList.remove('animate-pulse');
                showToast('Lokasi ditemukan: Kebumen Tengah', 'pin_drop');
            }, 1500);
        });
    });

    // ─── CLOSE MODALS ───
    document.querySelectorAll('[data-action="close-modal"]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) hideModal(modal.id);
        });
    });

    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) hideModal(overlay.id);
        });
    });

    // ─── CONFIRM LOGOUT ───
    document.querySelectorAll('[data-action="confirm-logout"]').forEach(btn => {
        btn.addEventListener('click', () => {
            hideModal('logoutModal');
            showToast('Anda telah keluar dari layanan', 'logout');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1200);
        });
    });

    // ─── SAVE PROFILE ───
    document.querySelectorAll('[data-action="save-profile"]').forEach(btn => {
        btn.addEventListener('click', () => {
            hideModal('editProfileModal');
            showToast('Profil berhasil diperbarui!', 'check_circle');
        });
    });

    // ─── YELLOW MAP PINS ───
    document.querySelectorAll('[data-action="open-yellow-pin"]').forEach(pin => {
        pin.addEventListener('click', () => {
            showToast('Kerusakan sedang — Retakan ringan terdeteksi', 'report');
        });
    });

});


// ═══════════════════════════════════════════
// GLOBAL HELPER FUNCTIONS
// ═══════════════════════════════════════════

// ─── Toast Notification System ───
window.showToast = function(message, icon = 'info') {
    // Remove any existing toast
    const existing = document.getElementById('smartroad-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'smartroad-toast';
    toast.style.cssText = `
        position: fixed; top: 80px; left: 50%; transform: translateX(-50%) translateY(-20px);
        z-index: 9999; display: flex; align-items: center; gap: 10px;
        background: rgba(22, 27, 43, 0.95); backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 255, 135, 0.2); border-radius: 999px;
        padding: 12px 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.6), 0 0 15px rgba(0,255,135,0.1);
        opacity: 0; transition: all 0.4s cubic-bezier(0.32, 0.72, 0, 1);
        font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
        max-width: calc(100vw - 2rem);
    `;
    toast.innerHTML = `
        <span class="material-symbols-outlined" style="color: #00ff87; font-size: 20px; flex-shrink: 0;">${icon}</span>
        <span style="color: #e2e8f0; font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${message}</span>
    `;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Animate out
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => toast.remove(), 400);
    }, 2500);
};

// ─── Bottom Sheet Toggle ───
window.toggleBottomSheet = function(id, show) {
    const sheet = document.getElementById(id);
    if (!sheet) return;
    if (show) {
        sheet.classList.remove('bottom-sheet-hidden');
        sheet.classList.add('bottom-sheet-visible');
    } else {
        sheet.classList.remove('bottom-sheet-visible');
        sheet.classList.add('bottom-sheet-hidden');
    }
};

// ─── Modal System ───
window.showModal = function(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.add('modal-active');
    });
};

window.hideModal = function(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('modal-active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
};

// ─── Map Zoom Helper ───
function applyMapZoom(zoom) {
    const mapBg = document.querySelector('[data-map-bg]');
    if (mapBg) {
        mapBg.style.transition = 'transform 0.3s ease';
        mapBg.style.transform = `scale(${zoom / 100})`;
    }
}
