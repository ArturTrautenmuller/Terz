using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Terz_Core.Consulta
{
    [XmlRoot(ElementName = "paymentMethod")]
    public class PaymentMethod
    {
        [XmlElement(ElementName = "type")]
        public string Type { get; set; }
    }

    [XmlRoot(ElementName = "transaction")]
    public class Transaction
    {
        [XmlElement(ElementName = "date")]
        public string Date { get; set; }
        [XmlElement(ElementName = "reference")]
        public string Reference { get; set; }
        [XmlElement(ElementName = "code")]
        public string Code { get; set; }
        [XmlElement(ElementName = "type")]
        public string Type { get; set; }
        [XmlElement(ElementName = "status")]
        public string Status { get; set; }
        [XmlElement(ElementName = "paymentMethod")]
        public PaymentMethod PaymentMethod { get; set; }
        [XmlElement(ElementName = "grossAmount")]
        public string GrossAmount { get; set; }
        [XmlElement(ElementName = "discountAmount")]
        public string DiscountAmount { get; set; }
        [XmlElement(ElementName = "feeAmount")]
        public string FeeAmount { get; set; }
        [XmlElement(ElementName = "netAmount")]
        public string NetAmount { get; set; }
        [XmlElement(ElementName = "extraAmount")]
        public string ExtraAmount { get; set; }
        [XmlElement(ElementName = "lastEventDate")]
        public string LastEventDate { get; set; }
    }

    [XmlRoot(ElementName = "transactions")]
    public class Transactions
    {
        [XmlElement(ElementName = "transaction")]
        public Transaction Transaction { get; set; }
    }

    [XmlRoot(ElementName = "transactionSearchResult")]
    public class TransactionSearchResult
    {
        [XmlElement(ElementName = "date")]
        public string Date { get; set; }
        [XmlElement(ElementName = "transactions")]
        public Transactions Transactions { get; set; }
        [XmlElement(ElementName = "resultsInThisPage")]
        public string ResultsInThisPage { get; set; }
        [XmlElement(ElementName = "currentPage")]
        public string CurrentPage { get; set; }
        [XmlElement(ElementName = "totalPages")]
        public string TotalPages { get; set; }
    }
}
