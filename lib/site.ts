export const site = {
  name: "Jampe",
  tagline:
    "Construimos el futuro de la presencia digital con ingeniería de precisión y diseño de alto nivel para empresas visionarias.",
  email: "hola@jampe.com",
  phone: "+34 900 123 456",
  whatsappMessage: "Hola, quiero hacer una consulta.",
} as const;

export function whatsappUrl() {
  const digits = site.phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

export const images = {
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA21xEzeZh5e_yARf-z3V-ets90FITzx7diwea-MgAdybh-MJG1w-lcisJ-eANtRvSKGOZxrY7ofgq7HNcpwjwmt_oW9niyN-6wdByPqOJMbjo2p17a3SCElaRYsrLk9Bg9pCpdikbDfrWTSRj3coqIUfws99Zf5wwOv9Jg7wTnJRb0IGwTcdl3CogpOclH_yQpWyBGHkUooltqHaVT6oh61S3SwnJSBO3q9GYaLqutLpLWrD3nM_sR",
  hero: "/Landing.png",
  software: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBIuY_MQnAEROj-faV5Dfsd7wraJbjBWmu80Hs8gLPbsicFgYVfznxqgv-FDaEphkzZFnJjUnD9sWcLIAB0tDL2rbTaPQu0OA5QKKtpFoJShSb8wQF4sWmygM1g6H7S_dJmggCxsarrAmxBTJx-75z1y4LqO2oeZHPyKzlB9RgOpcP89SD4aQ1IcMYvzzWp2vTS0SXCqqLeN5oQzZkDMW4iF4ereOPvJhswpxc7PD1A_iM1EkCbqCX",
  branding: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjHcPrdyzrc8w2dHrhJvIsE0BWRe_x8Cd-hR_gWchCyJerVnhxfrwzezQ-4X6QQAl6by3rYTbzIflswdckTkmiO9wwvr3EI0IMx3bf-ABAjIPElEUc7AwmNShbS13ku4jFJBsIu_PAFutj5tWnh7BxaKToAQHX-Q5zzwoE7em4DbZ9PqFOxEKr4AFGR4mgs5pmKA_anCLXpTyTzy4mtD4CI7E6uU5CBLA282HDE-_V8NFzridJJWIj",
  methodology: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuENFZJacVRH3lsLxfXzUiCXfQW2QJn1SKTg0Uf3ejUKbL8FHVFQKEYIaHBsgraQ9K-FrQx_FcBZjjkVR9k0x3ajd5c3UgD3f8Ursev04VzcO2V9hywH1-hvJZfgVOPNvnud1jODjLBXyUiBvs3FTDom7w-kYzumWCpLkFKpLxVRHeMs16tpMqRgOkpKHbASAknW3JYPNdMoX913OFkzhr8t6mMou5ftzmb9Tmt6zVikMALknSV5cG",
  softwareFactory: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4qE8ks97cV3e77u7ExsFY_mCQJi_BYItiy1HK-YEnX0LS3_ADFuDewSc67u_Pj6MkFEi9_RAm5jsq_gNsRUffQLMp_JUefvOxnt1zmAs0D-PJ8EPhL_j9Qn5DNu2UeoyHl9XANb7N8AFbrgj2HpTw5p5l2eNHRVx3vOlspgpE7Ue_oSrOdeVPAHR8m_9A3algCyyUbZqsUvgmRetMFQbX0FcPKWh8Le59d_qzUq1NC4bRe7-IuVBa",
  brandingPillar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSo-T7vE1T3HgekQp8-0BnXZHaxqOuNkPJC3H_on0S3ZXGlWjFa9DRd6ISQur5YFpHgX9pALHLgOL4tKZCGDiz21AwQ80Vr7f6lPMzVlP93f5datA9L78slWOn8sKYrnJFP3f7xAg7YQeZbPuGASHu66eaFgSCRd58ggXbS6WgYvpsnsUygjaPHkuxCOh2H8wwk8m-YcPzVXEufxwrCEz2enBvoPGcz8xgKXwtLBnVSsZ1iLyU0yj7",
} as const;

export const navItems = [
  { href: "/", label: "Inicio", match: "home" },
  { href: "/servicios", label: "Servicios", match: "services" },
  { href: "/metodologia", label: "Metodología", match: "methodology" },
] as const;
