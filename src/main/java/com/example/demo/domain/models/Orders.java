package com.example.demo.domain.models;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "orders")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private String deliveryName;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    @ManyToOne
    @JoinColumn(name="order_detail_id", nullable=false)
    private OrderDetail orderDetail;
}
