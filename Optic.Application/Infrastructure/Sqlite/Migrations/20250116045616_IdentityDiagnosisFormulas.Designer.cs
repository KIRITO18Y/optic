﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Optic.Application.Infrastructure.Sqlite;

#nullable disable

namespace Optic.Application.Infrastructure.Sqlite.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250116045616_IdentityDiagnosisFormulas")]
    partial class IdentityDiagnosisFormulas
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.10");

            modelBuilder.Entity("FormulaDiagnosis", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdDiagnostico")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdFormula")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("IdDiagnostico");

                    b.HasIndex("IdFormula");

                    b.ToTable("FormulasDiagnosis", (string)null);
                });

            modelBuilder.Entity("FormulasTags", b =>
                {
                    b.Property<int>("FormulasId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TagsId")
                        .HasColumnType("INTEGER");

                    b.HasKey("FormulasId", "TagsId");

                    b.HasIndex("TagsId");

                    b.ToTable("FormulasTags");
                });

            modelBuilder.Entity("Invoice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("BusinessId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ClientId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("DueDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("Number")
                        .HasColumnType("INTEGER");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Total")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("BusinessId");

                    b.HasIndex("ClientId");

                    b.HasIndex("Number")
                        .IsUnique();

                    b.ToTable("Invoices", (string)null);
                });

            modelBuilder.Entity("InvoiceDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("IdInvoice")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdProduct")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Price")
                        .HasColumnType("TEXT");

                    b.Property<int>("ProductId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Quantity")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("IdInvoice");

                    b.HasIndex("ProductId");

                    b.ToTable("InvoiceDetails");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Business", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CellPhoneNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nit")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("UrlLogo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CompanyName")
                        .IsUnique();

                    b.HasIndex("Nit")
                        .IsUnique();

                    b.ToTable("Businesses", (string)null);
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Client", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CellPhoneNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("IdentificationNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("IdentificationTypeId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Sex")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("IdentificationNumber")
                        .IsUnique();

                    b.HasIndex("IdentificationTypeId");

                    b.ToTable("Clients", (string)null);
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Diagnosis", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Diagnosis", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "OD, se refiere al ojo derecho. Esf (Esfera), Indica la potencia de la lente para corregir la miopía (valores negativos) o la hipermetropía (valores positivos)",
                            Name = "OD_ESF"
                        },
                        new
                        {
                            Id = 2,
                            Description = " OI, se refiere al ojo izquierdo. Esf (Esfera), Indica la potencia de la lente para corregir la miopía (valores negativos) o la hipermetropía (valores positivos)",
                            Name = "OI_ESF"
                        },
                        new
                        {
                            Id = 3,
                            Description = "OD, se refiere al ojo derecho. Cil (Cilindro), Indica el poder de la lente para corregir el astigmatismo",
                            Name = "OD_CIL"
                        },
                        new
                        {
                            Id = 4,
                            Description = "OI, se refiere al ojo izquierdo. Cil (Cilindro), Indica el poder de la lente para corregir el astigmatismo",
                            Name = "OI_CIL"
                        },
                        new
                        {
                            Id = 5,
                            Description = "OD, se refiere al ojo derecho. Eje (Eje), Es el ángulo en grados que define la orientación del cilindro para corregir el astigmatismo",
                            Name = "OD_EJE"
                        },
                        new
                        {
                            Id = 6,
                            Description = "OI, se refiere al ojo izquierdo. Eje (Eje), Es el ángulo en grados que define la orientación del cilindro para corregir el astigmatismo",
                            Name = "OI_EJE"
                        },
                        new
                        {
                            Id = 7,
                            Description = "ADD (Adición), Se refiere a la potencia adicional que se añade en la parte inferior de los lentes para corregir la presbicia, o dificultad para ver de cerca.",
                            Name = "ADD"
                        },
                        new
                        {
                            Id = 8,
                            Description = "Podría referirse al color del lente, si tiene un tinte específico para reducir el brillo o mejorar el contraste.",
                            Name = "COLOR"
                        },
                        new
                        {
                            Id = 9,
                            Description = "Indica si las lentes tienen protección contra los rayos ultravioleta (UV)",
                            Name = "UV"
                        },
                        new
                        {
                            Id = 10,
                            Description = "Indica si las lentes tienen protección contra los rayos visibles infrarrojos (VDT)",
                            Name = "VDT"
                        },
                        new
                        {
                            Id = 11,
                            Description = "Indica si las lentes tienen algún tipo de relajación visual o filtro especial para reducir la fatiga ocular",
                            Name = "RLX"
                        },
                        new
                        {
                            Id = 12,
                            Description = "Distancia Pupilar, Es la distancia entre la entrada del ojo y la salida del mismo, en milímetros",
                            Name = "DP"
                        },
                        new
                        {
                            Id = 13,
                            Description = "Este campo podría hacer referencia a la altura bifocal o algún otro ajuste específico de las lentes",
                            Name = "AB"
                        });
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Formula", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("BusinessId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ClientId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("IdInvoice")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("PriceConsultation")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("PriceLens")
                        .HasColumnType("TEXT");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("BusinessId");

                    b.HasIndex("ClientId");

                    b.HasIndex("IdInvoice")
                        .IsUnique();

                    b.ToTable("Formulas", (string)null);
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.IdentificationType", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Orden")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("IdentificationTypes", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Abbreviation = "CC",
                            Name = "Cédula de ciudadanía",
                            Orden = 1
                        },
                        new
                        {
                            Id = 2,
                            Abbreviation = "TI",
                            Name = "Tarjeta de Identidad",
                            Orden = 2
                        },
                        new
                        {
                            Id = 3,
                            Abbreviation = "CE",
                            Name = "Cédula de extranjería",
                            Orden = 3
                        },
                        new
                        {
                            Id = 4,
                            Abbreviation = "PA",
                            Name = "Pasaporte",
                            Orden = 4
                        },
                        new
                        {
                            Id = 5,
                            Abbreviation = "RC",
                            Name = "Registro Civil de Nacimiento",
                            Orden = 5
                        },
                        new
                        {
                            Id = 6,
                            Abbreviation = "PEP",
                            Name = "Permiso Especial de Permanencia",
                            Orden = 6
                        },
                        new
                        {
                            Id = 7,
                            Abbreviation = "OO",
                            Name = "Otro",
                            Orden = 7
                        });
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.InvoicePayment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Amount")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<int>("IdInvoice")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("IdInvoice");

                    b.ToTable("InvoicePayments");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.InvoiceService", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("IdInvoice")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Price")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("IdInvoice");

                    b.ToTable("InvoiceServices");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("BarCode")
                        .HasColumnType("TEXT");

                    b.Property<string>("CodeNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("IdBrand")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("IdSupplier")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Image")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Quantity")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("SalePrice")
                        .HasColumnType("TEXT");

                    b.Property<int>("Stock")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("UnitPrice")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("IdSupplier");

                    b.ToTable("Products", (string)null);
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Setting", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Settings", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Lista de sexos",
                            Name = "LIST_SEXES",
                            Value = "[{\"Id\":1,\"Name\":\"Masculino\"},{\"Id\":2,\"Name\":\"Femenino\"}]"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Tema: Dark/Light",
                            Name = "THEME",
                            Value = "Dark"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Lista de marcas",
                            Name = "LIST_BRAND",
                            Value = "[{\"Id\":1,\"Name\":\"Ray-Ban\"},{\"Id\":2,\"Name\":\"Oakley\"},{\"Id\":3,\"Name\":\"Incooptics\"},{\"Id\":4,\"Name\":\"Ópticas GMO\"},{\"Id\":5,\"Name\":\"Guess\"},{\"Id\":6,\"Name\":\"Silhouette\"},{\"Id\":7,\"Name\":\"Gucci\"},{\"Id\":8,\"Name\":\"Calvin Klein\"},{\"Id\":9,\"Name\":\"Tommy Hilfiger\"},{\"Id\":10,\"Name\":\"Carrera\"}]"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Habilitar código de barras",
                            Name = "ENABLED_BARCODE",
                            Value = "false"
                        });
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.SettingUser", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdSetting")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdUser")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SettingId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("SettingId");

                    b.HasIndex("UserId");

                    b.ToTable("SettingsUsers", (string)null);
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Supplier", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CellPhoneNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nit")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Nit");

                    b.ToTable("Suppliers", (string)null);
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Tags", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("IdAvatar")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdRol")
                        .HasColumnType("INTEGER");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("SecurePharse")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("StatusId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Users", (string)null);
                });

            modelBuilder.Entity("PoductCategories", b =>
                {
                    b.Property<int>("CategoriesId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ProductsId")
                        .HasColumnType("INTEGER");

                    b.HasKey("CategoriesId", "ProductsId");

                    b.HasIndex("ProductsId");

                    b.ToTable("PoductCategories");
                });

            modelBuilder.Entity("FormulaDiagnosis", b =>
                {
                    b.HasOne("Optic.Application.Domain.Entities.Diagnosis", "Diagnosis")
                        .WithMany("FormulaDiagnosis")
                        .HasForeignKey("IdDiagnostico")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Optic.Application.Domain.Entities.Formula", "Formula")
                        .WithMany("FormulaDiagnosis")
                        .HasForeignKey("IdFormula")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Diagnosis");

                    b.Navigation("Formula");
                });

            modelBuilder.Entity("FormulasTags", b =>
                {
                    b.HasOne("Optic.Application.Domain.Entities.Formula", null)
                        .WithMany()
                        .HasForeignKey("FormulasId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Optic.Application.Domain.Entities.Tags", null)
                        .WithMany()
                        .HasForeignKey("TagsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Invoice", b =>
                {
                    b.HasOne("Optic.Application.Domain.Entities.Business", "Business")
                        .WithMany("Invoices")
                        .HasForeignKey("BusinessId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Optic.Application.Domain.Entities.Client", "Client")
                        .WithMany("Invoices")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.Navigation("Business");

                    b.Navigation("Client");
                });

            modelBuilder.Entity("InvoiceDetail", b =>
                {
                    b.HasOne("Invoice", "Invoice")
                        .WithMany("InvoiceDetails")
                        .HasForeignKey("IdInvoice")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Optic.Application.Domain.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Invoice");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Client", b =>
                {
                    b.HasOne("Optic.Application.Domain.Entities.IdentificationType", "IdentificationType")
                        .WithMany("Clients")
                        .HasForeignKey("IdentificationTypeId");

                    b.Navigation("IdentificationType");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Formula", b =>
                {
                    b.HasOne("Optic.Application.Domain.Entities.Business", "Business")
                        .WithMany("Formulas")
                        .HasForeignKey("BusinessId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Optic.Application.Domain.Entities.Client", "Client")
                        .WithMany("Formulas")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Invoice", "Invoice")
                        .WithOne("Formula")
                        .HasForeignKey("Optic.Application.Domain.Entities.Formula", "IdInvoice")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Business");

                    b.Navigation("Client");

                    b.Navigation("Invoice");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.InvoicePayment", b =>
                {
                    b.HasOne("Invoice", "Invoice")
                        .WithMany("InvoicePayments")
                        .HasForeignKey("IdInvoice")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Invoice");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.InvoiceService", b =>
                {
                    b.HasOne("Invoice", "Invoice")
                        .WithMany("InvoiceServices")
                        .HasForeignKey("IdInvoice")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Invoice");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Product", b =>
                {
                    b.HasOne("Optic.Application.Domain.Entities.Supplier", "Supplier")
                        .WithMany("Products")
                        .HasForeignKey("IdSupplier")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.Navigation("Supplier");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.SettingUser", b =>
                {
                    b.HasOne("Optic.Application.Domain.Entities.Setting", "Setting")
                        .WithMany("SettingUsers")
                        .HasForeignKey("SettingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Optic.Application.Domain.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Setting");

                    b.Navigation("User");
                });

            modelBuilder.Entity("PoductCategories", b =>
                {
                    b.HasOne("Optic.Application.Domain.Entities.Category", null)
                        .WithMany()
                        .HasForeignKey("CategoriesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Optic.Application.Domain.Entities.Product", null)
                        .WithMany()
                        .HasForeignKey("ProductsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Invoice", b =>
                {
                    b.Navigation("Formula")
                        .IsRequired();

                    b.Navigation("InvoiceDetails");

                    b.Navigation("InvoicePayments");

                    b.Navigation("InvoiceServices");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Business", b =>
                {
                    b.Navigation("Formulas");

                    b.Navigation("Invoices");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Client", b =>
                {
                    b.Navigation("Formulas");

                    b.Navigation("Invoices");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Diagnosis", b =>
                {
                    b.Navigation("FormulaDiagnosis");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Formula", b =>
                {
                    b.Navigation("FormulaDiagnosis");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.IdentificationType", b =>
                {
                    b.Navigation("Clients");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Setting", b =>
                {
                    b.Navigation("SettingUsers");
                });

            modelBuilder.Entity("Optic.Application.Domain.Entities.Supplier", b =>
                {
                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
